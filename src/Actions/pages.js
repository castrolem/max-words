// @flow
export const ADD_PAGE = 'ADD_PAGE';
export const NAVIGATE = '@@NAVIGATE';
export const REMOVE_PAGE = 'REMOVE_PAGE';

export type Action = {
  error?: Object,
  payload: Object,
  type: string,
}

export const addPage = (): Action => ({
  payload: {},
  type: ADD_PAGE,
});

export const removePage = (): Action => ({
  payload: {},
  type: REMOVE_PAGE,
});

export const navigateTo = (page: number): Action => ({
  payload: {
    pageNumber: page,
  },
  type: NAVIGATE,
});
