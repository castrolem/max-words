// @flow
import R from 'ramda';

export const convertArrayToObject: (Array<Object>) => Object = (arr: Array<Object>) => (
  R.mergeAll(arr)
);

export const placeholder = '';
