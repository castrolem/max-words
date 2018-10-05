// @flow
import uuidv4 from 'uuid/v4';

import {
  ADD_PAGE,
  NAVIGATE,
  REMOVE_PAGE,
} from '../Actions/pages';
import type { Action } from '../Actions/pages';

type Page = {
  id: string,
  value: string,
}

type Pages = Array<Page>;

type PagesStore = {
  currentPage: number,
  pages: Pages,
}

export const generateBlankPage: (void) => Page = (): Page => ({
  id: uuidv4(),
  value: '',
});

export const blankPage: Page = generateBlankPage();

export const initialState: PagesStore = {
  currentPage: 0,
  pages: [blankPage],
};

const pages = (state: PagesStore = initialState, action: Action): PagesStore => {
  switch (action.type) {
    case ADD_PAGE: {
      const newPages: Pages = [...state.pages, blankPage];
      return { ...state, pages: newPages, currentPage: newPages.length - 1 };
    }

    case NAVIGATE: {
      return { ...state, currentPage: action.payload.pageNumber };
    }

    case REMOVE_PAGE: {
      if (state.pages.length === 1) {
        return { ...initialState, pages: [generateBlankPage()] };
      }

      const pageIndexToRemove: number = state.pages.findIndex(
        (page: Page) => page.id === action.payload.id
      );

      const filteredPages: Pages = state.pages.filter(
        (page: Page): boolean => page.id !== action.payload.id
      );
      const isLastPage: boolean = pageIndexToRemove === state.pages.length - 1;

      return {
        ...state,
        currentPage: isLastPage ? pageIndexToRemove - 1 : pageIndexToRemove,
        pages: filteredPages,
      };
    }

    default: {
      return state;
    }
  }
};

export default pages;
