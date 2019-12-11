import React from 'react';
import Todo from './Todo';
import '../../styling/TodoList.css';

const TodoList = props => {
  return (
    <div className="list-container">
      <div className = "list">
        <h2 className="list-title">Todo</h2>
        {props.tasks.map(task => (
          <div className="noncomp">
          <Todo 
            key={task.id}
            task={task}
            toggleCompleted={props.toggleCompleted}
          />
          </div>
        ))}
      </div>
      <div className="comp-list">
        <h2 className="list-title">Completed</h2>
        {props.tasks.map(task => (
          <div className="comp">
          <Todo 
            key={task.id}
            task={task}
            toggleCompleted={props.toggleCompleted}
          />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList;