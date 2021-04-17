const INITIAL_PLAYER_STATS = {
  hp: 100,
  maxHP: 100,
  level: 1,
  xp: 0,
  dungeonsCompleted: {},
};

const INITIAL_SENSITIVITY = 0.4;

export const savePlayer = (player) => localStorage.setItem('player', player);
export const fetchPlayer = () => {
  const playerJSON = localStorage.getItem('player');
  if (playerJSON) {
    const player = JSON.parse(playerJSON);
    player.hp = player.maxHP;
    if (!player.dungeonsCompleted) player.dungeonsCompleted = {};
    return player;
  }
  return INITIAL_PLAYER_STATS;
}

export const saveSensitivity = (sensitivity) => localStorage.setItem('sensitivity', sensitivity);
export const fetchSensitivity = () => localStorage.getItem('sensitivity') || INITIAL_SENSITIVITY;