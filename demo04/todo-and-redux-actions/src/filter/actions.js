import * as actionTypes from './actionTypes';
import {createAction} from 'redux-actions';
// export const filterSet = filterType => ({
//   type: actionTypes.SET_FILTER,
//   filterType
// })



export const filterSet = createAction(actionTypes.SET_FILTER, filterType => filterType)

