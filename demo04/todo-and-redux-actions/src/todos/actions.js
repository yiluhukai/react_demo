import * as actionTypes from './actionTypes';
import { createActions } from 'redux-actions';

let nextTodoId = 0;
export const {addtodo,removetodo,toggletodo} = createActions({
  [actionTypes.ADD_TODO]: text => ({ text, id: nextTodoId++ }),
  [actionTypes.REMOVE_TODO]: id => id,
  [actionTypes.TOGGLE_TODO]: id => id
})