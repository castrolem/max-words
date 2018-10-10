// @flow
import { SET_THEME } from '../Actions/themes';
import type { Action } from '../Actions/types';
import THEMES from '../Constants/colors';

const DEFAULT_THEME = 'Metallica';

export type ThemesStore = {
  id: string,
}

const THEME_IDS = Object.keys(THEMES);

export const initialState = {
  id: DEFAULT_THEME,
};

const themes = (state: ThemesStore = initialState, action: Action): ThemesStore => {
  switch (action.type) {
    case SET_THEME: {
      const finder = (id: string): boolean => id === action.payload.id;
      if (THEME_IDS.find(finder)) {
        return { ...state, id: action.payload.id };
      }
      return state;
    }

    default: {
      return state;
    }
  }
};

export default themes;
