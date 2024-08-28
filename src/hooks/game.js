import { useReducer } from 'react';

import { fetch, fetchInt } from '../utils/localStorage';
import { STARTING_DECK, INITIAL_UPGRADES } from '../data/targets';
import { ROUND_TIME, INITIAL_GOAL_SCORE, COMPLETE_ROUND_ON_SCORE_HIT } from '../data/constants';

const initialState = {
  status: 'INITIAL',
  sensitivity: fetch('sensitivity'),
  targetSize: fetchInt('targetSize'),
};

const INITIAL_GAME_STATE = {
  timer: ROUND_TIME,
  currentScore: 0,
  goalScore: INITIAL_GOAL_SCORE,
  level: 1,
  money: 0,
  targets: STARTING_DECK,
  upgrades: INITIAL_UPGRADES,
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
      const newScore = state.currentScore + action.payload.inc;
      if (newScore >= state.goalScore && COMPLETE_ROUND_ON_SCORE_HIT) {
        // Complete round
        return bumpLevel(state);
      }
      return {
        ...state,
        currentScore: newScore,
      }
    case 'endRound':
      if (state.currentScore >= state.goalScore) {
        return bumpLevel(state);
      }
      return {
        ...state,
        status: 'COMPLETED',
      }
    case 'upgrade':
      if (!state.status === 'SHOP') {
        throw new Error('Must be in shop to purchase')
      }
      const upgrades = Object.assign({}, state.upgrades);
      action.payload.upgrades.forEach(upgrade => upgrades[upgrade]++);
      return {
        ...state,
        upgrades,
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