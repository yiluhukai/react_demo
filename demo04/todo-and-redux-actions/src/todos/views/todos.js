import React from 'react';
import './style.css';
import AddTodo from './addTodo';
import TodoList from './todolist'
export default ()=>{
  return (
    <div className="todos">
        <AddTodo/>
        <TodoList/>
    </div>
  )
}