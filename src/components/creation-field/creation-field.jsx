import React from 'react';
import './creation-field.scss';

class CreationField extends React.Component {
  state  = {
    inputValue : ''
  }
  getInputValue = (e) => {
    this.setState ({
      inputValue : e.target.value
    })
  }

  // getInputValue = (props) => {
  //   const inputValue = props.value; // ?
  // }

  createNewTask = () => {
    // let taskValue = props.
    console.log(this.state.inputValue);
  }
  render() {
    return (
      <>
      <h3>Create new task : </h3>
      <div className="todo-list__add-task-container">
        <input className="todo-list__input" onChange={this.getInputValue} value={this.state.inputValue}/>
        <button className="todo-list__add-button" onClick={this.createNewTask}>+</button>
      </div>
      </>
    )
  }
}

export default CreationField;