import React from 'react';

function ToDoItem(props) {
  console.log(props.isComplete)
  return (
    <li>
      <p>{props.task}</p>      
      <p><em>{props.isComplete === true ? 'Done' : 'Not Done'}</em></p>
    </li>
  );
}

export default ToDoItem;

