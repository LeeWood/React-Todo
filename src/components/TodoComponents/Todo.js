import React from 'react';
import './Todo.css';

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
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;