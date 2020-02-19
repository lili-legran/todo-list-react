import React from 'react';
import './task-in-work.scss';
import ActiveTask from '../active-task/active-task';

function TaskInWork(props) {
  return (
    <>
      <h2>Tasks in work</h2>
      <ul className="todo-list__active-tasks">
        {
          props.tasksInWork
            .map(task => <ActiveTask taskInWork={ task } key={ task } complete={props.complete}/>)
        }
      </ul>
    </>
  )
}

export default TaskInWork;