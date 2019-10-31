import React from 'react';

const Todo = props => {

  const handleClick = () => {
    console.log(`you clicked ${props.item.task}!`);
  };

  return (
    <div onClick={handleClick}>
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;