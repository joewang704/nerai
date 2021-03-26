const INITIAL_PLAYER_STATS = {
  hp: 100,
  maxHP: 100,
  level: 1,
  xp: 0,
};

const INITIAL_SENSITIVITY = 0.4;

export const savePlayer = (player) => localStorage.setItem('player', player);
export const fetchPlayer = () => {
    const player = localStorage.getItem('player');
    return player ? JSON.parse(player) : INITIAL_PLAYER_STATS;
}

export const saveSensitivity = (sensitivity) => localStorage.setItem('sensitivity', sensitivity);
export const fetchSensitivity = () => localStorage.getItem('sensitivity') || INITIAL_SENSITIVITY;