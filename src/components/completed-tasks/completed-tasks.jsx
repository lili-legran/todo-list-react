import React from 'react';
import './completed-tasks.scss';
import CompletedTask from '../completed-task/completed-task';

class CompletedTasks extends React.Component {
  render () {
    return (
      <>
      <h2 className='todo-list__completed-name'>Completed tasks</h2>
      <ul className="todo-list__completed-tasks">
        { 
          this.props.completedTasks.map(task => <CompletedTask task={task} key={task} />)
        }
      </ul>
      </>
    )
  }
}

export default CompletedTasks;