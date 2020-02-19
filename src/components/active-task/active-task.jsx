import React from 'react';
import './active-task.scss';

class ActiveTask extends React.Component {
  setTaskValue = () => {
    this.props.complete(this.props.taskInWork);
  }
  
  render () {
    return (
      <li className='todo-list__active-task'>
        <div className="todo-list__task-row">
          <span> {this.props.taskInWork} </span>
          <button className="todo-list__complete-button" onClick={this.setTaskValue}> &#x2714; </button>
        </div>
      </li>
    )
  }
}

export default ActiveTask;