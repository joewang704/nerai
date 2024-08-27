import { random } from "../utils"

export const TIERS = ['gray', 'green', 'blue', 'purple', 'gold']

export const generateTarget = (tier) => {
  return {
    tier,
    effects: [],
  }
}

const generateProbs = (level) => {
  const base = [90, 9, 1, 0, 0];

  for (let l = 1; l <= level; l++) {
    let startingIdx = 2;
    if (l > 9) {
      startingIdx = 4
    } else if (l > 4) {
      startingIdx = 3
    }
    let total = 0;
    for (let t = startingIdx; t > 0; t--) {
      base[t] += 1;
      total += base[t];
    }
    const rest = 100 - total;
    base[0] = rest;
  }
  return base;
}

export const generateRandomTarget = (level) => {
  const probs = generateProbs(level);

  const rng = random(0, 101);

  let bound = 0;
  let chosenTier = 0;
  for (let tier = 0; tier < probs.length; tier++) {
    bound += probs[tier];
    if (rng < bound) {
      chosenTier = tier;
      break;
    }
  }

  return {
    tier: chosenTier,
    effects: [],
  }
}

export const UPGRADES = ['baseTargets', 'extraSpawnOnHit', 'multiOnHit', 'multiOnConsecutiveHit']
export const UPGRADE_INFO = {
  baseTargets: {
    descriptions: [
      'Increases base number of targets by 1',
      'Increases base number of targets by 2',
      'Increases base number of targets by 3',
      'Increases base number of targets by 4',
    ],
  },
  extraSpawnOnHit: {
    descriptions: [
      '5% chance of extra target spawning on hit',
      '10% chance of extra target spawning on hit',
      '15% chance of extra target spawning on hit',
      '20% chance of extra target spawning on hit',
    ],
  },
  multiOnHit: {
    descriptions: [
      'Not implemented yet. Do not choose'
    ],
  },
  multiOnConsecutiveHit: {
    descriptions: [
      'Not implemented yet. Do not choose'
    ],
  },
}
export const INITIAL_UPGRADES = UPGRADES.reduce((acc, value) => {
  acc[value] = 0;
  return acc;
}, {})

export const generateRandomUpgrade = () => {
  return UPGRADES[random(0, UPGRADES.length)];
}

export const generateRandomUpgrades = ({ count }) => {
  const upgrades = [];
  while (upgrades.length < count) {
    const choice = generateRandomUpgrade();
    if (!upgrades.includes(choice)) {
      upgrades.push(choice);
    }
  }
  return upgrades;
}

export const getUpgradeDescription = ({ level, name }) => UPGRADE_INFO[name]['descriptions'][level];

export const STARTING_DECK = [
  generateTarget(0),
  generateTarget(0),
  generateTarget(0),
]