import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './todoItem';
import * as actions from '../actions';
import {FilterTypes} from '../../constants';
function TodoList(props) {
  const { todos, onToggleTodo, onRemoveTodo } = props;
  return (
    <ul className="todo-list">
    {
      todos.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          completed={item.completed}
          onToggle={() => onToggleTodo(item.id)}
          onRemove={() => onRemoveTodo(item.id)}
        />
        ))
    }
    </ul>
  )
}

function mapStateToProps(state) {
  return {
    todos: selectVisibleTodos(state.todos,state.filter)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleTodo(id) {
      dispatch(actions.toggletodo(id));
    },
    onRemoveTodo(id) {
      dispatch(actions.removetodo(id));
    }
  }
}

function selectVisibleTodos(todos,filter){
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
