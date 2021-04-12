import { ITEMS } from './items';

import snail from '../images/enemies/snail/stand_0.png';
import slime from '../images/enemies/slime/stand_0.png';

const getHP = (lvl) => lvl * lvl * 10 + 10;
const getDmg = (lvl) => lvl * lvl;
const getXP = (lvl) => lvl * lvl + 5;

const getStats = (lvl) => ({
  maxHP: getHP(lvl),
  hp: getHP(lvl),
  xp: getXP(lvl),
  damage: getDmg(lvl),
})

export const ENEMIES = {
  Snail: {
    name: 'Snail',
    lvl: 1,
    img: snail,
    drops: [
      {
        item: ITEMS.Stick,
        chance: 10 / 100,
      },
    ],
    ...getStats(1),
  },
  Slime: {
    name: 'Slime',
    lvl: 2,
    img: slime,
    drops: [],
    ...getStats(2),
  },
};