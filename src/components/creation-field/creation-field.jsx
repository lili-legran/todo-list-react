import React from 'react';
import './creation-field.scss';

class CreationField extends React.Component {
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