import * as actionTypes from './actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO: {
      const { id, text } = action;
      return [{ id, text , completed: false}, ...state]
    }
    case actionTypes.REMOVE_TODO: {
      const { id } = action;
      return state.filter(todo => id !== todo.id)
    }
    case actionTypes.TOGGLE_TODO: {
      const { id } = action;
      return state.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        } else {
          return todo;
        }
      })
    }
    default:
      return state
  }
}