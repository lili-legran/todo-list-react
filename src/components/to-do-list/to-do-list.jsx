import React from 'react';
import './to-do-list.scss';
import CreationField from '../creation-field/creation-field'
import TaskInWork from '../tasks-in-work/tasks-in-work';
import CompletedTasks from '../completed-tasks/completed-tasks';
import SetPin from '../images/images';

class TodoList extends React.Component {
  state  = {
    inputValue: '',
    todoTasks: [],
    completedTasks: []
  }

  setValueInWork = (e) => {
    this.setState ({
      inputValue : e.target.value
    })
  }

  addNewTask = () => {
    this.setState({
      todoTasks: [...this.state.todoTasks, this.state.inputValue],
      inputValue: ''
    });
  }

  completeTask = (value) => {
    let newArray = this.state.todoTasks.filter(item => item !== value);
    this.setState({
      todoTasks: newArray,
      completedTasks: [...this.state.completedTasks, value]
    });
    
  }

  render() {
    return (
      <>
        <h1>ToDo LIST</h1>
        <div className='todo-list'>
          <CreationField 
            curValue={ this.state.inputValue } 
            changeInput={ this.setValueInWork } 
            addTask={ this.addNewTask } 
          />
          <TaskInWork 
            tasksInWork={ this.state.todoTasks } 
            complete={this.completeTask}
            />
          <CompletedTasks completedTasks={this.state.completedTasks}/>
        </div>
        <SetPin />
      </>
    )
  }
}

export default TodoList;