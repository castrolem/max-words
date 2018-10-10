// @flow
import type { Action } from './types';

export const SET_THEME = '@@SET_THEME';

export const setTheme = (id: string): Action => ({
  payload: {
    id,
  },
  type: SET_THEME,
});
