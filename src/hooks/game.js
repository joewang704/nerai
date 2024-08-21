import { useReducer } from 'react';

import { fetch } from '../utils/localStorage';
import { STARTING_DECK } from '../data/targets';
import { ROUND_TIME, INITIAL_GOAL_SCORE } from '../data/constants';

const initialState = {
  status: 'INITIAL',
  sensitivity: fetch('sensitivity'),
  targetSize: fetch('targetSize'),
};

const INITIAL_GAME_STATE = {
  timer: ROUND_TIME,
  currentScore: 0,
  goalScore: INITIAL_GOAL_SCORE,
  level: 1,
  money: 0,
  targets: STARTING_DECK,
}

const bumpLevel = (state) => ({
  ...state,
  money: state.money + state.currentScore,
  currentScore: 0,
  level: state.level + 1,
  goalScore: Math.ceil(state.goalScore * 1.2),
  status: 'SHOP',
});

const reducer = (state, action) => {
  switch(action.type) {
    case 'changeSettings': {
      return {
        ...state,
        sensitivity: action.payload.sensitivity || state.sensitivity,
        targetSize: action.payload.targetSize || state.targetSize,
      }
    }
    case 'returnToHomeScreen': {
      return {
        status: 'INITIAL',
      }
    }
    case 'startGame':
      return {
        ...state,
        status: 'RUNNING',
        ...INITIAL_GAME_STATE,
      }
    // In-game actions
    case 'hitTarget':
      return {
        ...state,
        currentScore: state.currentScore + action.payload.inc,
      }
    case 'endRound':
      if (state.currentScore >= state.goalScore) {
        return bumpLevel(state);
      }
      return {
        ...state,
        status: 'COMPLETED',
      }
    case 'addTargets':
      if (!state.status === 'SHOP') {
        throw new Error('Must be in shop to purchase')
      }
      return {
        ...state,
        money: state.money - action.payload.spent,
        targets: [...state.targets, ...action.payload.targets],
      }
    case 'startNextRound':
      if (!state.status === 'SHOP') {
        throw new Error('Must be in shop to begin next round')
      }
      return {
        ...state,
        status: 'RUNNING',
        timer: ROUND_TIME,
      }
    default:
      throw new Error('Action not recognized - ' + action.type)
  }
}

export const useGameReducer = () => useReducer(reducer, initialState);