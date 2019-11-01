import React from 'react';
import '../../styling/Todo.css';

const Todo = props => {
  let toggleClass = "task";
  if (props.task.completed) {
    toggleClass += "completed";
  }

  const handleClick = () => {
    props.toggleCompleted(props.task.id);
  };

  return (
    <div onClick={handleClick} className={toggleClass}>
        <p className="task-item">
        <i class="far fa-check-circle" /> {props.task.task}
      </p>
    </div>
  );
};

export default Todo;