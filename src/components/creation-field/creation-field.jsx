import React from 'react';
import './creation-field.scss';

class CreationField extends React.Component {
  render() {
    return (
      <>
      <h3>Create new task : </h3>
      <div className="todo-list__add-task-container">
        <input className="todo-list__input"/>
        <button className="todo-list__add-button">+</button>
      </div>
      </>
    )
  }
}

export default CreationField;