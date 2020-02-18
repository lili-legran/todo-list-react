import React from 'react';
import './creation-field.scss';
import TodoList from '../to-do-list/to-do-list'

class CreationField extends React.Component {
  // state = {
  //   value : ''
  // }
  
  // getInputValue = (e) => {
  //   this.setState ({
  //     value : e.target.value
  //   })
  //   console.log(this.state.value);
  // }
  // setsetset() {
  //   const val = this.state.value;
  //   return val;
  // }
  // createNewTask = () => {
  //   this.state.valuesArray.push(this.state.inputValue); 
  //   this.setValue();
  // }
  // setValue = () => {
  //   const listItems = this.state.valuesArray.map((item) => {
  //     item.text = this.state.inputValue;
  //     console.log(item.text);
  //     return <li key={item.id}> {item.text} </li>
  //   });
  // }
  render() {
    return (
      <>
      <h3>Create new task : </h3>
      <div className="todo-list__add-task-container">
        <input className="todo-list__input" onChange={this.props.changeInput} value={this.props.curValue}/>
        <button className="todo-list__add-button" onClick={this.props.addTask}>+</button>
      </div>
      </>
    )
  }
}

export default CreationField;