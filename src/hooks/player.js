import { useReducer } from 'react';

export const getXPToLevel = (lvl) => lvl * lvl * 10;

const initialState = {
  hp: 100,
  maxHP: 100,
  damage: 10,
  level: 1,
  xp: 0,
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'takeDamage':
      return {
        ...state,
        hp: state.hp - action.payload.damage,
      }
    case 'gainXP':
      return {
        ...state,
        xp: state.xp + action.payload.amount,
      }
    default:
      return state
  }
}

export const usePlayerReducer = () => useReducer(reducer, initialState);
