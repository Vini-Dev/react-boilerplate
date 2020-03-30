import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  toggle: [''],
});

const INITIAL_STATE = localStorage.getItem('theme') || 'dark';

const toggle = (state = INITIAL_STATE) => {
  const theme = state === 'dark' ? 'light' : 'dark';

  localStorage.setItem('theme', theme);

  return theme;
};

export default createReducer(INITIAL_STATE, {
  [Types.TOGGLE]: toggle,
});
