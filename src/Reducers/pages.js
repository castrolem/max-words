// @flow
import uuidv4 from 'uuid/v4';

import {
  ADD_PAGE,
  NAVIGATE,
  REMOVE_PAGE,
  SET_PAGE_VALUE,
} from '../Actions/pages';
import type { Action } from '../Actions/pages';

export type Page = {
  id: string,
  value: string,
}

export type Pages = Array<Page>;

export type PagesStore = {
  currentPage: number,
  pages: Pages,
}

export const generateBlankPage: (value?: string) => Page = (value = ''): Page => ({
  id: uuidv4(),
  value,
});

const blankPage: Page = generateBlankPage();

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

    case SET_PAGE_VALUE: {
      const newPages: Pages = state.pages.map(
        (page: Page): Page => {
          if (page.id === action.payload.id) { return { ...page, value: action.payload.value }; }
          return page;
        }
      );
      return { ...state, pages: newPages };
    }

    default: {
      return state;
    }
  }
};

export default pages;
