import * as actionTypes from './actionTypes';
import {FilterTypes} from '../constants'
export default (state=FilterTypes.ALL,action)=>{
  switch(action.type){
    case actionTypes.SET_FILTER:{
      return action.filterType
    }
    default:
      return state;
  }
}