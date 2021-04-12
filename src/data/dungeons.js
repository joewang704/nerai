import { ENEMIES } from './enemies';

const SNAIL_DUNGEON = {
  name: 'Snail Dungeon 1',
  enemies: new Array(3).fill(ENEMIES.Snail),
  timer: 60,
  lvl: 1,
}

const SLIME_FARM = {
  name: 'Slime Farm',
  enemies: new Array(10).fill(ENEMIES.Slime),
  timer: 9999,
  lvl: 2,
};

const SLIME_DUNGEON = {
  name: 'Slime Dungeon',
  enemies: [
    ENEMIES.Slime,
    ENEMIES.Slime,
    ENEMIES.Slime,
    {
      name: 'Slime Boss',
      hp: 500,
      maxHP: 500,
      damage: 20,
      xp: 10,
      lvl: 1,
    },
  ],
  timer: 60,
  lvl: 2,
};

export const DUNGEONS = [
  SNAIL_DUNGEON,
  SLIME_FARM,
  SLIME_DUNGEON,
];
