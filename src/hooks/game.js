import { useReducer } from 'react';

const initialState = {
  status: 'INITIAL',
  player: {
    hp: 100,
    maxHP: 100,
    damage: 10,
    level: 1,
    xp: 0,
  },
};

export const getXPToLevel = (lvl) => lvl * lvl * 10;

const reducer = (state, action) => {
  switch(action.type) {
    case 'startGame':
      return {
        ...state,
        status: 'RUNNING',
        enemies: action.payload.enemies,
        currentEnemyIdx: 0,
      }
    case 'nextEnemy':
      return {
        ...state,
        currentEnemyIdx: state.currentEnemyIdx + 1,
      }
    case 'damageEnemy': {
      const { enemies, currentEnemyIdx } = state;
      const enemy = enemies[currentEnemyIdx];
      const newEnemies = enemies.slice();
      const newHP = Math.max(enemy.hp - 10, 0);
      newEnemies[currentEnemyIdx] = {
        ...enemy,
        hp: newHP,
      };

      const newEnemyIdx = newHP ? currentEnemyIdx : currentEnemyIdx + 1;
      let player = state.player;
      if (!newHP) {
        // Gain XP
        let newXP = state.player.xp + enemy.xp;
        let level = state.player.level;
        const reqXP = getXPToLevel(level);
        // Level if XP maxed
        if (newXP >= reqXP) {
          newXP = reqXP - newXP;
          level++;
        }
        player = {
          ...state.player,
          xp: newXP,
          level,
        };
      }
      if (newEnemyIdx >= enemies.length) {
        return {
          status: 'COMPLETED',
        }
      }
      return {
        ...state,
        player,
        enemies: newEnemies,
        currentEnemyIdx: newEnemyIdx,
      }
    }
    case 'takeDamage': {
      const { enemies, currentEnemyIdx } = state;
      const enemy = enemies[currentEnemyIdx];
      return {
        ...state,
        player: {
          ...state.player,
          hp: state.player.hp - enemy.damage,
        },
      }
    }
    case 'endGame':
      return {
        ...state,
        status: 'INITIAL',
      }
    default:
      return state
  }
}

export const useGameReducer = () => useReducer(reducer, initialState);