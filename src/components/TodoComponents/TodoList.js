import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="list-conainer">
      <div className = "list">
        <h2>Todo</h2>
        {props.tasks.map(task => (
          <Todo 
            key={task.id}
            task={task}
            toggleCompleted={props.toggleCompleted}
          />
        ))}
      </div>
      <div className="comp-list">
        <h2>Completed</h2>
      </div>
    </div>
  )
}

export default TodoList;