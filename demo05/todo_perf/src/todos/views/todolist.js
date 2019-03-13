import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './todoItem';
import {getVisibleTodos} from '../selector';

function TodoList(props) {
  const { todos } = props;
  return (
    <ul className="todo-list">
    {
      todos.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          completed={item.completed}
          id={item.id}
        />
        ))
    }
    </ul>
  )
}

function mapStateToProps(state) {
  return {
    //使用reselect进行优化
    todos: getVisibleTodos(state)
  }
}


// function selectVisibleTodos(todos,filter){
//   switch(filter){
//     case FilterTypes.ALL : 
//         return todos;
//     case FilterTypes.COMPLETED:
//         return todos.filter(todo => todo.completed === true)  
//     case FilterTypes.UNCOMPLETED:
//         return todos.filter(todo => todo.completed === false)
//     default:
//         throw new Error('unsupported filter');       
//   }
// }

export default connect(mapStateToProps, null)(TodoList);
