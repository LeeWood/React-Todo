import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className = "list">
      {props.tasks.map(task => (
        <Todo 
          key={task.id}
          task={task}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </div>
  )
}

export default TodoList;