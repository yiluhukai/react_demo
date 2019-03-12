import * as actionTypes from './actionTypes';

export const filterSet = filterType => ({
  type: actionTypes.SET_FILTER,
  filterType
})