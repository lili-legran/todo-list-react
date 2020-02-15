import React from 'react';
import './to-do-list.scss';
import CreationField from '../creation-field/creation-field'
import TaskInWork from '../tasks-in-work/tasks-in-work';
import CompletedTasks from '../completed-tasks/completed-tasks';
import SetPin from '../images/images';

class TodoList extends React.Component {
  render() {
    return (
      <>
        <h1>ToDo LIST</h1>
        <div className='todo-list'>
          <CreationField />
          <TaskInWork />
          <CompletedTasks />
        </div>
        <SetPin />
      </>
    )
  }
}

export default TodoList;