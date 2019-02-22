import * as ActionTypes from './ActionTypes';
import Dispatcher  from './AppDispatcher';

export const increment = (couterCaption)=>{
    Dispatcher.dispatch({
      type:ActionTypes.INCREMENT,
      couterCaption
    })
}

export const decrement =(couterCaption) =>{
   Dispatcher.dispatch({
     type:ActionTypes.DECREMENT,
     couterCaption
   })
}
