import React, { useEffect, useContext, useState, useRef, useCallback } from 'react';
import * as d3 from 'd3-timer';

import { GameContext } from './app';
import EnemyInfo from './enemy_info';
import PlayerInfo from './player_info';
import { degToRad, random, useStableCB } from '../utils';
import { getDmg } from '../hooks/game';

const RADIUS = 5;

const Game = ({ screenHandle }) => {
  const { state, dispatch } = useContext(GameContext);
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState();
  const [ctx, setCtx] = useState();
  const cursorRef = useRef({ x: 100, y: 100 });
  const targetsRef = useRef([]);
  const stateRef = useRef(state);

  useEffect(() => {
    stateRef.current = state; 
  }, [state])

  useEffect(() => {
    const canvas = canvasRef.current;
    setCanvas(canvas);
    const ctx = canvasRef.current.getContext('2d');
    setCtx(ctx);
    const { innerWidth: width, innerHeight: height } = window;
    canvasRef.current.width = width;
    canvasRef.current.height = height;
    canvas.requestPointerLock();
    document.addEventListener('pointerlockchange', () => lockChangeAlert(canvas), false);
    document.addEventListener('click', handleClick);
    return () => {
      document.exitPointerLock();
      screenHandle.exit();
    };
  }, [])

  useEffect(() => {
    let t;
    if (canvas && ctx) {
      t = d3.timer(tickAnimation)
    }
    return () => t && t.stop()
  }, [canvas, ctx]);

  const handleClick = () => {
    const screenX = cursorRef.current.x;
    const screenY = cursorRef.current.y;
    const targets = targetsRef.current;
    const newTargets = targets.filter(({ x, y, width, height }) =>
      // Filter out if target clicked inside
      !(screenX + RADIUS >= x && screenX - RADIUS <= x + width && screenY + RADIUS >= y && screenY - RADIUS <= y + height));
    const { enemies, currentEnemyIdx } = stateRef.current;
    const enemy = enemies[currentEnemyIdx];
    if (newTargets.length === targets.length) {
      // Player misses target
      dispatch({ type: 'takeDamage' });
    } else {
      // Player hits target
      targetsRef.current = newTargets;
      dispatch({
        type: 'damageEnemy',
        payload: {
          damage: getDmg(state.player.level),
        }
      });
    }
  }

  const spawnTarget = (canvas) => {
    if (!targetsRef.current.length && canvas) {
      const WIDTH = 50;
      const HEIGHT = 50;

      const { width, height } = canvas;
      const x = random(width / 2 - width / 4, width - WIDTH - width / 2);
      const y = random(height / 2 - height / 4, height - HEIGHT - height / 2);
      targetsRef.current = [{ x, y, width: WIDTH, height: HEIGHT }];
    }
  }

  const drawTargets = (ctx) => {
    targetsRef.current.forEach(({ x, y, width, height }) => {
      ctx.fillStyle = "yellow";
      ctx.fillRect(x, y, width, height);
    });
  };

  const drawCanvas = (canvas, ctx) => {
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawTargets(ctx);

    // Cursor
    ctx.fillStyle = "#f00";
    ctx.beginPath();
    ctx.arc(cursorRef.current.x, cursorRef.current.y, RADIUS, 0, degToRad(360), true);
    ctx.fill();
    ctx.closePath();
  }

  const tickAnimation = useStableCB((timeElapsed, [canvas, ctx]) => {
    if (!canvas || !ctx) return;

    spawnTarget(canvas);
    drawCanvas(canvas, ctx);
    ctx.fillStyle = "white";
    ctx.font = "30px Helvetica";
    const timerSec = (state.timer - timeElapsed / 1000).toFixed(2);
    if (timerSec <= 0) {
      return dispatch({ type: 'endGame' });
    }
    ctx.fillText(timerSec, canvas.width / 2 - 30, 180);
  }, [canvas, ctx]);

  const lockChangeAlert = (canvas) => {
    if (document.pointerLockElement === canvas ||
        document.mozPointerLockElement === canvas) {
      canvas.addEventListener("mousemove", m => mouseMoveMemo(m), false);
    }
  }

  const mouseMoveMemo = useStableCB((e, [cursorRef, canvas]) => {
    if (!canvas) return;
    // Edge detection
    const { x, y } = cursorRef.current;
    if (x > canvas.width) {
      cursorRef.current = { x: canvas.width - 1, y }
      return
    }
    if (y > canvas.height) {
      cursorRef.current = { x, y: canvas.height - 1 }
      return
    }  
    if (x < 0) {
      cursorRef.current = { x: 1, y }
      return
    }
    if (y < 0) {
      cursorRef.current = { x, y: 1 }
      return
    }
    const dx = e.movementX * (state.sensitivity || 1);
    const dy = e.movementY * (state.sensitivity || 1);
    cursorRef.current = { x: x + dx, y: y + dy }
  }, [cursorRef, canvas]);

  return (
    <>
      <canvas ref={canvasRef}>
      </canvas>
      <EnemyInfo />
      <PlayerInfo />
    </>
  );
}

export default Game;
