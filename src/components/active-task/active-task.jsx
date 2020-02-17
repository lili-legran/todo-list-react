import React from 'react';
import './active-task.scss';
import listItem from '../creation-field/creation-field'

class ActiveTask extends React.Component {
  setTaskValue() {

  }
  
  render () {
    return (
      <>
        <li className='todo-list__active-task'>{listItem}</li>
      </>
    )
  }
}

export default ActiveTask;