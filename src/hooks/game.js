import { useReducer } from 'react';

import { fetch } from '../utils/localStorage';

const initialState = {
  status: 'INITIAL',
  sensitivity: fetch('sensitivity'),
  targetSize: fetch('targetSize'),
};

const INITIAL_GAME_STATE = {
  timer: 30,
  currentScore: 0,
  goalScore: 30,
  level: 1,
}

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
    default:
      return state
  }
}

export const useGameReducer = () => useReducer(reducer, initialState);