import React from 'react';
import './to-do-list.scss';
import CreationField from '../creation-field/creation-field'
import TaskInWork from '../tasks-in-work/tasks-in-work';
import CompletedTasks from '../completed-tasks/completed-tasks';
import SetPin from '../images/images';

class TodoList extends React.Component {
  state  = {
    inputValue: '',
    todoTasks: []
  }

  setValueInWork = (e) => {
    this.setState ({
      inputValue : e.target.value
    })
    console.log(this.state.inputValue);
  }

  addNewTask = () => {
    this.setState({
      todoTasks: [...this.state.todoTasks, this.state.inputValue],
      inputValue: ''
    });
  }

  render() {
    console.log(this.state.valuesArray, '<<<<<')
    return (
      <>
        <h1>ToDo LIST</h1>
        <div className='todo-list'>
          <CreationField 
            curValue={ this.state.inputValue } 
            changeInput={ this.setValueInWork } 
            addTask={ this.addNewTask } 
          />
          <TaskInWork tasksInWork={ this.state.todoTasks}/>
          {/* <CompletedTasks /> */}
        </div>
        <SetPin />
      </>
    )
  }
}

export default TodoList;