import { random } from "../utils"

export const TIERS = ['gray', 'green', 'blue', 'purple', 'gold']

export const generateTarget = (tier) => {
  return {
    tier,
    effects: [],
  }
}

const generateProbs = (level) => {
  const base = [50, 49, 1, 0, 0];

  for (let l = 1; l <= level; l++) {
    let startingIdx = 2;
    if (l > 9) {
      startingIdx = 4
    } else if (l > 4) {
      startingIdx = 3
    }
    let total = 0;
    for (let t = startingIdx; t > 0; t--) {
      base[t] = level++;
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

export const STARTING_DECK = [
  generateTarget(0),
  generateTarget(0),
  generateTarget(0),
]