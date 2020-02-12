import React from 'react';
import './to-do-list.scss';
import CreationField from '../creation-field/creation-field'

class TodoList extends React.Component {
  render() {
    return (
      <>
        <h1>ToDo LIST</h1>
        <div className='todo-list'>
          <CreationField />
        </div>
        
      </>
    )
  }
}

export default TodoList;