import React from 'react';
import './creation-field.scss';

class CreationField extends React.Component {
  state  = {
    inputValue: '',
    valuesArray: []
  }
  getInputValue = (e) => {
    this.setState ({
      inputValue : e.target.value
    })
  }
  createNewTask = () => {
    this.state.valuesArray.push(this.state.inputValue); 
    this.setValue();
  }
  setValue = () => {
    const listItems = this.state.valuesArray.map((item) => {
      item.text = this.state.inputValue;
      console.log(item.text);
      return <li key={item.id}> {item.text} </li>
    });
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