import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
const TodoItem = ({onToggleTodo, onRemoveTodo, completed, text}) => {
  const checkedProp = completed ? {checked: true} : {};
  return (
    <li
      className="todo-item"
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      <input className="toggle" type="checkbox" {...checkedProp} readOnly onClick={onToggleTodo} />
      <label className="text">{text}</label>
      <button className="remove" onClick={onRemoveTodo}>×</button>
    </li>
  )
}


function mapDispatchToProps(dispatch,ownProps) {
  const { id } = ownProps;
  return {
    onToggleTodo() {
      dispatch(actions.toggleTodo(id));
    },
    onRemoveTodo() {
      dispatch(actions.removeTodo(id));
    }
  }
}
export default connect(null,mapDispatchToProps)(TodoItem);
