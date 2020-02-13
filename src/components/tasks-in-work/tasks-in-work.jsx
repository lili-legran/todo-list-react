import React from 'react';
import './task-in-work.scss';
import ActiveTask from '../active-task/active-task';

class TaskInWork extends React.Component {
  render () {
    return (
      <>
        <h2>Tasks in work</h2>
        <ul className="todo-list__active-tasks">
          <ActiveTask />
        </ul>
      </>
    )
  }
}

export default TaskInWork;