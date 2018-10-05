import pages, { generateBlankPage, initialState } from './pages';
import {
  ADD_PAGE,
  NAVIGATE,
  REMOVE_PAGE,
  SET_PAGE_VALUE,
} from '../Actions/pages';

describe('Pages Reducer', () => {
  describe('when adding a Page', () => {
    it('adds a blank page to the pages list', () => {
      const action = { type: ADD_PAGE, payload: {} };
      const newState = pages(initialState, action);
      expect(newState.pages.length).toEqual(initialState.pages.length + 1);
      expect(newState.currentPage).not.toEqual(initialState.currentPage);
      expect(newState.currentPage).toEqual(newState.pages.length - 1);
    });
  });

  describe('when navigating to a Page', () => {
    it('sets the current page to the desired page', () => {
      const action = { type: NAVIGATE, payload: { pageNumber: 2 } };
      const arrayOfBlankPages = [
        generateBlankPage(),
        generateBlankPage(),
        generateBlankPage(),
        generateBlankPage(),
      ];
      const initialStateWithPages = { ...initialState, pages: arrayOfBlankPages };
      const newState = pages(initialStateWithPages, action);
      expect(newState.pages.length).toEqual(initialStateWithPages.pages.length);
      expect(newState.currentPage).toEqual(action.payload.pageNumber);
    });
  });

  describe('when removing a Page', () => {
    it('removes the page from the list and sets the correct page number', () => {
      const existingPage = generateBlankPage();
      const action = { type: REMOVE_PAGE, payload: { id: existingPage.id } };
      const arrayOfPages = [
        generateBlankPage(),
        generateBlankPage(),
        existingPage,
        generateBlankPage(),
      ];
      const initialStateWithPages = { ...initialState, pages: arrayOfPages };
      const newState = pages(initialStateWithPages, action);
      expect(newState.pages.length).not.toEqual(initialStateWithPages.pages.length);
      expect(newState.currentPage).not.toEqual(initialStateWithPages.currentPage);
      expect(newState.currentPage).toEqual(newState.pages.length - 1);
    });

    describe('when removing the last page', () => {
      it('removes the page from the list and sets the correct page number', () => {
        const existingPage = generateBlankPage();
        const action = { type: REMOVE_PAGE, payload: { id: existingPage.id } };
        const arrayOfPages = [
          generateBlankPage(),
          generateBlankPage(),
          generateBlankPage(),
          existingPage,
        ];
        const initialStateWithPages = { ...initialState, pages: arrayOfPages };
        const newState = pages(initialStateWithPages, action);
        expect(newState.pages.length).not.toEqual(initialStateWithPages.pages.length);
        expect(newState.currentPage).not.toEqual(initialStateWithPages.currentPage);
        expect(newState.currentPage).toEqual(newState.pages.length - 1);
      });
    });

    describe('when there\'s only one Page', () => {
      it('creates a new blank page', () => {
        const existingPage = generateBlankPage();
        const action = { type: REMOVE_PAGE, payload: { id: existingPage.id } };
        const initialStateWithPages = { ...initialState, pages: [existingPage] };
        const newState = pages(initialStateWithPages, action);
        expect(newState.pages.length).toEqual(initialStateWithPages.pages.length);
        expect(newState.currentPage).toEqual(initialStateWithPages.currentPage);
        expect(newState.pages[0].id).not.toEqual(initialStateWithPages.pages[0].id);
      });
    });
  });

  describe('when setting a page value', () => {
    it('changes the value of the page', () => {
      const pageWithValue = generateBlankPage('hello world');
      const newPageValue = 'Goodbye my Lover, goodbye my friend';
      const action = {
        type: SET_PAGE_VALUE,
        payload: { id: pageWithValue.id, value: newPageValue },
      };
      const pagesWithValue = [generateBlankPage(), pageWithValue];
      const initialStateWithPages = { ...initialState, pages: pagesWithValue };
      const newState = pages(initialStateWithPages, action);
      expect(newState.pages[1].value).toEqual(newPageValue);
    });
  });
});
