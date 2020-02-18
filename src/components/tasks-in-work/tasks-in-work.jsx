import React from 'react';
import './task-in-work.scss';
import ActiveTask from '../active-task/active-task';

class TaskInWork extends React.Component {
  render () {
    return (
      <>
        <h2>Tasks in work</h2>
        <ul className="todo-list__active-tasks">
          {
            this.props.tasksInWork
              .map(task => <ActiveTask taskInWork={ task } key={ task } />)
          }
        </ul>
      </>
    )
  }
}

export default TaskInWork;