const initialState = {
  sensitivity: 0.4,
  targetSize: 8,
}

// Key can be sensitivity, targetSize, etc.
export const save = (key, value) => localStorage.setItem(key, value);
export const fetch = (key) => localStorage.getItem(key) || initialState[key];
export const fetchInt = (key) => parseInt(localStorage.getItem(key) || initialState[key]);