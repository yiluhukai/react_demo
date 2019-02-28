import * as ActionTypes from './ActionTypes';
//action的构造函数
export const increment = (counterCation)=>{
  return {
    type:ActionTypes.INCREMENT,
    counterCation
  }
}

export const decrement = (counterCation)=>{
  return {
    type:ActionTypes.DECREMENT,
    counterCation
  }
}