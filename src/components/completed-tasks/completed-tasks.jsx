import React from 'react';
import './completed-tasks.scss';
import CompleteTask from '../complete-task/complete-task';

class CompletedTasks extends React.Component {
  render () {
    return (
      <>
      <h2 className='todo-list__completed-name'>Completed tasks</h2>
      <ul className="todo-list__completed-tasks">
        <CompleteTask />
      </ul>
      </>
    )
  }
}

export default CompletedTasks;