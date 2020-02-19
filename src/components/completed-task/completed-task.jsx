import React from 'react';
import './completed-task.scss';

class CompleteTask extends React.Component {
  render () {
    return (
      <li className='todo-list__active-task todo-list__completed-task'>
        <div className='todo-list__task-row'>
          <span>{ this.props.task }</span>
        </div>
      </li>
    )
  }
}

export default CompleteTask;