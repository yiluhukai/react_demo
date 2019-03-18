import * as actionTypes from './actionTypes';
import * as status from './status';
export default (state={status: status.LOADING},action)=>{
    switch (action.type){
      case actionTypes.FETCH_STARTED:
          return {status:status.LOADING};
      case actionTypes.FETCH_SUCCESS:
          return {...state,status:status.SUCCESS,...action.result}  
      case actionTypes.FETCH_FAILURE:
          return {status:status.FAILURE}  
      default:{
          return state;
      }        
    }
}