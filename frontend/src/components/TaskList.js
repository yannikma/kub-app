import React from 'react';

import './TaskList.css';

function TaskList(props) {
  if(props.tasks == undefined) {
    return (<p>There are no stored tasks</p>);
  }
  return (
    <ul>
      {props.tasks.map((task) => (
        <li key={task.title}>
          <h2>{task.title}</h2>
          <p>{task.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
