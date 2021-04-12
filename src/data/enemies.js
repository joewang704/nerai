import { ITEMS } from './items';

import snail from '../images/enemies/snail/stand_0.png';
import slime from '../images/enemies/slime/stand_0.png';

export const ENEMIES = {
  Snail: {
    name: 'Snail',
    hp: 100,
    maxHP: 100,
    damage: 10,
    xp: 5,
    lvl: 1,
    img: snail,
    drops: [
      {
        item: ITEMS.Stick,
        chance: 10 / 100,
      },
    ],
  },
  Slime: {
    name: 'Slime',
    hp: 150,
    maxHP: 150,
    damage: 20,
    xp: 10,
    lvl: 2,
    img: slime,
    drops: [],
  },
};