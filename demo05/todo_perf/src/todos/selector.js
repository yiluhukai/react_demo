import {createSelector} from 'reselect';
import {FilterTypes}  from '../constants';
const getTodos = state => state.todos;
const getFilter = state => state.filter;


export const getVisibleTodos = createSelector(
  [ getFilter, getTodos ],
  (filter, todos) => {
    switch(filter){
      case FilterTypes.ALL : 
          return todos;
      case FilterTypes.COMPLETED:
          return todos.filter(todo => todo.completed === true)  
      case FilterTypes.UNCOMPLETED:
          return todos.filter(todo => todo.completed === false)
      default:
          throw new Error('unsupported filter');       
    }
  }
)