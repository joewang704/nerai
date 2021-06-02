const INITIAL_PLAYER_STATS = {
  hp: 100,
  maxHP: 100,
  level: 1,
  xp: 0,
  dungeonsCompleted: {},
  inventory: [],
  equipment: {},
};

const INITIAL_SENSITIVITY = 0.4;

export const savePlayer = (player) => localStorage.setItem('player', player);
export const fetchPlayer = () => {
  const playerJSON = localStorage.getItem('player');
  if (playerJSON) {
    const player = JSON.parse(playerJSON);
    if (player.hp && !player.maxHP) player.hp = player.maxHP;
    return Object.assign({}, player, INITIAL_PLAYER_STATS);
  }
  return INITIAL_PLAYER_STATS;
}

export const saveSensitivity = (sensitivity) => localStorage.setItem('sensitivity', sensitivity);
export const fetchSensitivity = () => localStorage.getItem('sensitivity') || INITIAL_SENSITIVITY;