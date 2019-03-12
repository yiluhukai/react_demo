import * as actionTypes from './actionTypes';
// let nextTodoId = 0;
// export const addTodo = (text) => {
//   return {
//     type: actionTypes.ADD_TODO,
//     id: nextTodoId++,
//     text,
//   }
// }

// export const removeTodo = (id) => {
//   return {
//     type: actionTypes.REMOVE_TODO,
//     id
//   }
// }

// export const toggleTodo = (id) => {
//   return {
//     type: actionTypes.TOGGLE_TODO,
//     id
//   }
// }
//创建actionCreator的函数

function makeActionCreator(type,...keys){
  return function(...values){
    const action = {};
    action.type = type;
    keys.map((key,index)=>{
        return action[key]=values[index];
    })
    return action;
  }
}

export const addTodo = makeActionCreator(actionTypes.ADD_TODO,'text','id');
export const toggleTodo = makeActionCreator(actionTypes.TOGGLE_TODO,'id');
export const removeTodo = makeActionCreator(actionTypes.REMOVE_TODO,'id');