import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  toggleTheme: [''],
});

const INITIAL_STATE = localStorage.getItem('theme') || 'dark';

const toggleTheme = (state = INITIAL_STATE) => {
  const theme = state === 'dark' ? 'light' : 'dark';

  localStorage.setItem('theme', theme);

  return theme;
};

export default createReducer(INITIAL_STATE, {
  [Types.TOGGLE_THEME]: toggleTheme,
});
