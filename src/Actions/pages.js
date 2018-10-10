// @flow
import type { Action } from './types';

export const ADD_PAGE = 'ADD_PAGE';
export const NAVIGATE = '@@NAVIGATE';
export const REMOVE_PAGE = 'REMOVE_PAGE';
export const SET_PAGE_VALUE = 'SET_PAGE_VALUE';

export const addPage = (): Action => ({
  payload: {},
  type: ADD_PAGE,
});

export const removePage = (id: string): Action => ({
  payload: {
    id,
  },
  type: REMOVE_PAGE,
});

export const navigateTo = (page: number): Action => ({
  payload: {
    pageNumber: page,
  },
  type: NAVIGATE,
});

export const setPageValue = (id: string, value: string): Action => ({
  payload: {
    id,
    value,
  },
  type: SET_PAGE_VALUE,
});
