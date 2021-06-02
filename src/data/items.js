import { stringify } from 'uuid';
import stick from '../images/weapons/swords/stick.png';

const getStats = (level) => ({
  // Base damage of weapon
  dmg: level + 10,
})


const BASE_ITEM_DROP_CHANCE = .5;

const generateWeapon = ({
  name,
  img,
  level,
}) => [{
  chance: BASE_ITEM_DROP_CHANCE,
  stats: {
    ...getStats(level),
  },
  category: 'weapon',
  id: stringify(name + level),
  name,
  img,
  level,
}]

export const ITEMS = {
  3: generateWeapon({
    name: 'Stick',
    img: stick,
    level: 3,
  }),
  5: generateWeapon({
    name: 'Mushroom',
    img: 'https://maplestory.io/api/GMS/222/item/1382016/icon',
    level: 5,
  }),
  10: generateWeapon({
    name: 'Wooden Staff',
    img: 'https://maplestory.io/api/GMS/222/item/1382004/icon',
    level: 10,
  }),
  15: generateWeapon({
    name: 'Sapphire Staff',
    img: 'https://maplestory.io/api/GMS/222/item/1382003/icon',
    level: 15,
  }),
  20: generateWeapon({
    name: 'Emerald Staff',
    img: 'https://maplestory.io/api/GMS/222/item/1382005/icon',
    level: 15,
  }),
};