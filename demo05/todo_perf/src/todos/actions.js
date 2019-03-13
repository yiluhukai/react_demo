import * as actionTypes from './actionTypes';
let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: actionTypes.ADD_TODO,
    id: nextTodoId++,
    text,
  }
}

export const removeTodo = (id) => {
  return {
    type: actionTypes.REMOVE_TODO,
    id
  }
}

export const toggleTodo = (id) => {
  return {
    type: actionTypes.TOGGLE_TODO,
    id
  }
}