import { ITEMS } from './items';

import snail from '../images/enemies/snail/stand_0.png';
import slime from '../images/enemies/slime/stand_0.png';

const getHP = (lvl) => lvl * lvl * 10 + 10;
const getDmg = (lvl) => lvl * lvl;
const getXP = (lvl) => lvl * lvl + 5;
const getItemDrops = (mobLevel) => ITEMS[Object.keys(ITEMS).find(itemLevel => mobLevel <= itemLevel)];

const getStats = (lvl) => ({
  maxHP: getHP(lvl),
  hp: getHP(lvl),
  xp: getXP(lvl),
  damage: getDmg(lvl),
  drops: getItemDrops(lvl),
})

export const ENEMIES = [
  {
    name: 'Snail',
    lvl: 1,
    img: snail,
    ...getStats(1),
  },
  {
    name: 'Blue Snail',
    lvl: 3,
    img: 'https://maplestory.io/api/GMS/222/mob/100101/render/stand/0',
    ...getStats(3),
  },
  {
    name: 'Red Snail',
    lvl: 5,
    img: 'https://maplestory.io/api/GMS/222/mob/100002/render/stand/0',
    ...getStats(5),
  },
  {
    name: 'Orange Mushroom',
    lvl: 7,
    img: 'https://maplestory.io/api/GMS/222/mob/100004/render/stand/0',
    ...getStats(7),
  },
  {
    name: 'Slime',
    lvl: 10,
    img: slime,
    ...getStats(10),
  },
];