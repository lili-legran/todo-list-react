import React from 'react';
import './active-task.scss';
import listItem from '../creation-field/creation-field'

class ActiveTask extends React.Component {
  setTaskValue = () => {
    this.props.completeTask(this.props.taskInWork);
  }
  
  render () {
    return (
      <>
        <li className='todo-list__active-task'>
          {this.props.taskInWork}
          <button onClick={this.setTaskValue}>...</button>
        </li>
       
      </>
    )
  }
}

export default ActiveTask;