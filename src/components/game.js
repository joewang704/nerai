import React, { useEffect, useContext, useState, useRef } from 'react';
import styled from '@emotion/styled';
import * as d3 from 'd3-timer';

import { GameContext } from './app';
import EnemyInfo from './enemy_info';
import PlayerInfo from './player_info';
import { degToRad, random, useStableCB } from '../utils';
import { getDmg } from '../hooks/game';
import { MAX_NUM_DMG_COUNT_LENGTH, COLORS } from '../data/constants';

import zeroLarge from '../images/damage/0_large.png';
import oneLarge from '../images/damage/1_large.png';
import twoLarge from '../images/damage/2_large.png';
import threeLarge from '../images/damage/3_large.png';
import fourLarge from '../images/damage/4_large.png';
import fiveLarge from '../images/damage/5_large.png';
import sixLarge from '../images/damage/6_large.png';
import sevenLarge from '../images/damage/7_large.png';
import eightLarge from '../images/damage/8_large.png';
import nineLarge from '../images/damage/9_large.png';

const RADIUS = 5;
const DAMAGE_NUMBERS_EXPIRATION_TIME = 600;
const PLAYER_BAR_HEIGHT = 116;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Game = ({ screenHandle }) => {
  const { state, dispatch } = useContext(GameContext);
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState();
  const [ctx, setCtx] = useState();
  const [timeRemaining, setTimeRemaining] = useState();
  const cursorRef = useRef({ x: 500, y: 500 });
  const targetsRef = useRef([]);
  const stateRef = useRef(state);
  const imageRef = useRef(null);

  // Damage Refs
  const damageStackRef = useRef([]);
  const damageStackClearRef = useRef(null);
  const damageDigitsImgRef = useRef([]);

  useEffect(() => {
    stateRef.current = state; 
  }, [state])

  useEffect(() => {
    const canvas = canvasRef.current;
    setCanvas(canvas);
    const ctx = canvasRef.current.getContext('2d');
    setCtx(ctx);
    // const { innerWidth: width, innerHeight: height } = window;
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    console.log(canvasRef.current.width);
    console.log(canvasRef.current.height);
    canvas.requestPointerLock();
    const pointerLockChange = () => lockChangeAlert(canvas)
    document.addEventListener('pointerlockchange', pointerLockChange, false);
    document.addEventListener('click', handleClick);

    // Set image refs
    [zeroLarge, oneLarge, twoLarge, threeLarge, fourLarge, fiveLarge, sixLarge, sevenLarge, eightLarge, nineLarge].forEach((img, i) => {
      damageDigitsImgRef.current[i] = new Image();
      damageDigitsImgRef.current[i].src = img;
    });

    return () => {
      document.removeEventListener('pointerlockchange', pointerLockChange);
      document.removeEventListener('click', handleClick);
      document.exitPointerLock();
      // screenHandle.exit();
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
    const newTargets = targets.filter(({ x, y, radius }) =>
      // Filter out if target clicked inside
      Math.sqrt(Math.pow(x - screenX, 2), Math.pow(y - screenY, 2)) >= radius + RADIUS);

    if (newTargets.length === targets.length) {
      // Player misses target and takes personal damage
      dispatch({ type: 'takeDamage' });
    } else {
      // Player hits target and deals damage to mob
      if (damageStackRef.current.length >= MAX_NUM_DMG_COUNT_LENGTH) {
        damageStackRef.current = [];
      }
      if (damageStackClearRef.current) {
        clearTimeout(damageStackClearRef.current);
      }
      damageStackClearRef.current = setTimeout(() => {
        damageStackRef.current = [];
      }, DAMAGE_NUMBERS_EXPIRATION_TIME);
      const dmg = getDmg(state.player.level);
      damageStackRef.current.push(dmg);
      targetsRef.current = newTargets;
      dispatch({
        type: 'damageEnemy',
        payload: {
          damage: dmg,
        }
      });
    }
  }

  const spawnTarget = (canvas) => {
    if (!targetsRef.current.length && canvas) {
      const TARGET_RADIUS = 30;

      const { width, height } = canvas;
      const x = random(width / 2 - width / 4, width - TARGET_RADIUS - width / 2);
      const y = random(height / 2 - height / 4, height - TARGET_RADIUS - height / 2);
      targetsRef.current = [{ x, y, radius: TARGET_RADIUS }];
    }
  }

  const drawTargets = (ctx) => {
    targetsRef.current.forEach(({ x, y, radius }) => {
      ctx.fillStyle = COLORS.omSand;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, degToRad(360), true);
      ctx.fill();
      ctx.closePath();
    });
  };

  const drawDamage = (ctx, dmg, x, y) => {
    let xDraw = x;
    dmg.toString().split('').forEach((digit, i) => {
      let yDraw = y;
      if (i % 2 == 0) {
        yDraw = y + 2;
      }
      ctx.drawImage(damageDigitsImgRef.current[Number(digit)], xDraw, yDraw);
      xDraw += 25;
    });
  }

  const drawCanvas = (canvas, ctx) => {
    const { width, height } = canvas;
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 0, width, height);

    drawTargets(ctx);

    // Cursor
    ctx.fillStyle = "#f00";
    ctx.beginPath();
    ctx.arc(cursorRef.current.x, cursorRef.current.y, RADIUS, 0, degToRad(360), true);
    ctx.fill();
    ctx.closePath();

    // Enemy image
    const enemyImageWidth = 37;
    const enemyImageHeight = 20;
    const enemyImageX = (width / 2) + 50;
    const enemyImageY = height - PLAYER_BAR_HEIGHT - 60 - enemyImageHeight;
    if (imageRef.current) {
      ctx.drawImage(imageRef.current, enemyImageX, enemyImageY);
    }

    // Damage numbers
    let offset = 35;
    let offsetDY = 35;
    damageStackRef.current.forEach((num) => {
      drawDamage(ctx, num, enemyImageX + enemyImageWidth / 3, enemyImageY - offset);
      offset += offsetDY;
    });
  }

  const tickAnimation = useStableCB((timeElapsed, [canvas, ctx]) => {
    if (!canvas || !ctx) return;

    spawnTarget(canvas);
    drawCanvas(canvas, ctx);

    // Handle timer state in game loop
    const timerSec = (state.timer - timeElapsed / 1000).toFixed(2);
    if (timerSec <= 0) {
      return dispatch({ type: 'endGame' });
    }
    setTimeRemaining(timerSec);

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

  const { enemies, currentEnemyIdx } = stateRef.current;
  const enemy = enemies && enemies[currentEnemyIdx];

  return (
    <Container>
      <EnemyInfo timeRemaining={timeRemaining} />
      <PlayerInfo />
      <canvas ref={canvasRef}>
      </canvas>
      <div style={{ display: 'none' }}>
        {enemy && <img src={enemy.img} ref={imageRef} />}
      </div>
    </Container>
  );
}

export default Game;
