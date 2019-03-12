import {handleActions} from 'redux-actions';
import * as actions from './actions'

export default handleActions(
  {
    [actions.addtodo]: (state=[], { payload: { text,id} }) => {
      return [{ id, text , completed: false}, ...state];
    },
    [actions.removetodo]: (state=[], { payload: id }) => {
      return state.filter(todo => id !== todo.id)
    },
    [actions.toggletodo]:(state=[],{payload:id}) => {
      return state.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        } else {
          return todo;
        }
      })
    }
  },[]
);