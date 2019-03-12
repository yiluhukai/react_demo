import * as actionTypes from './actionTypes';
import { FilterTypes } from '../constants';
import { handleAction } from 'redux-actions'
import { filterSet } from './actions'
// export default (state=FilterTypes.ALL,action)=>{
//   switch(action.type){
//     case actionTypes.SET_FILTER:{
//       return action.filterType
//     }
//     default:
//       return state;
//   }
// }

export default handleAction(
  filterSet,
  (state = FilterTypes.ALL, action) => action.payload,
  FilterTypes.ALL)