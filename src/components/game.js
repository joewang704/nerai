import React, { useEffect, useContext, useState, useRef } from 'react';
import styled from '@emotion/styled';
import * as d3 from 'd3-timer';

import { GameContext } from './app';
import GameInfo from './game_info';
import { degToRad, random, useStableCB } from '../utils';
import { TIERS } from '../data/targets';

const RADIUS = 5;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Game = () => {
  const { state, dispatch } = useContext(GameContext);
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState();
  const [ctx, setCtx] = useState();
  const [timeRemaining, setTimeRemaining] = useState();
  const cursorRef = useRef({ x: 500, y: 500 });
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
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    canvas.requestPointerLock({
      unadjustedMovement: true,
    });
    const pointerLockChange = () => lockChangeAlert(canvas)
    document.addEventListener('pointerlockchange', pointerLockChange, false);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('pointerlockchange', pointerLockChange);
      document.removeEventListener('click', handleClick);
      document.exitPointerLock();
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
    if (!document.pointerLockElement) {
      // Handle 100ms required delay to relock pointer
      setTimeout(() => {
        canvasRef.current.requestPointerLock({
          unadjustedMovement: true,
        });
      }, 100);
    } else {
      const screenX = cursorRef.current.x;
      const screenY = cursorRef.current.y;
      const targets = targetsRef.current;
      const newTargets = targets.filter(({ x, y, radius }) =>
        // Filter out if target clicked inside
        Math.sqrt(Math.pow(x - screenX, 2), Math.pow(y - screenY, 2)) >= radius + RADIUS);

      if (newTargets.length === targets.length) {
        // Player loses points on missing target
        dispatch({ type: 'hitTarget', payload: { inc: -1 }})
      } else {
        dispatch({ type: 'hitTarget', payload: { inc: 1 }})
      }
      targetsRef.current = newTargets;
    }
  }

  const spawnTarget = (canvas) => {
    if (!targetsRef.current.length && canvas) {
      const { targetSize, targets } = state;
      const { width, height } = canvas;
      const x = random(width / 2 - width / 4, width - targetSize - width / 2);
      const y = random(height / 2 - height / 4, height - targetSize - height / 2);
      
      const target = targets[random(0, targets.length)];

      targetsRef.current = [{ x, y, radius: targetSize, target }];
    }
  }

  const drawTargets = (ctx) => {
    targetsRef.current.forEach(({ x, y, radius, target }) => {
      ctx.fillStyle = TIERS[target.tier];
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, degToRad(360), true);
      ctx.fill();
      ctx.closePath();
    });
  };

  const drawCanvas = (canvas, ctx) => {
    const { width, height } = canvas;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);

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

    // Handle timer state in game loop
    const timerSec = (state.timer - timeElapsed / 1000).toFixed(2);
    if (timerSec <= 0) {
      return dispatch({ type: 'endRound' });
    }
    setTimeRemaining(timerSec);

  }, [canvas, ctx]);

  const lockChangeAlert = (canvas) => {
    if (document.pointerLockElement === canvas ||
        document.mozPointerLockElement === canvas) {
      canvas.addEventListener("mousemove", mouseMoveMemo, false);
    } else {
      canvas.removeEventListener("mousemove", mouseMoveMemo, false);
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
    <Container>
      <GameInfo timeRemaining={timeRemaining} />
      <canvas ref={canvasRef}>
      </canvas>
    </Container>
  );
}

export default Game;
