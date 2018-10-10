import themes, { initialState } from './themes';
import { SET_THEME } from '../Actions/themes';

describe('Themes Reducer', () => {
  describe('when changing a theme', () => {
    it('overwrites the theme with the selected one', () => {
      const newTheme = 'Red Hot Chilli Peppers';
      const action = { type: SET_THEME, payload: { id: newTheme } };
      const newState = themes(initialState, action);
      expect(newState.id).toEqual(newTheme);
    });

    describe('when theme does not exist', () => {
      it('returns the default theme', () => {
        const notExistingTheme = 'Potato Tomato';
        const action = { type: SET_THEME, payload: { id: notExistingTheme } };
        const newState = themes(initialState, action);
        expect(newState.id).toEqual(initialState.id);
      });
    });
  });
});
