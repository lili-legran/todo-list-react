import React from 'react';
import './images.scss';

class SetPin extends React.Component {
  render() {
    return (
      <>
      <img className="todo-list__pin-1" src="./img/pin-1.png" alt="pin" />
      <img className="todo-list__pin-2" src="img/pin-2.png" alt="pin" />
      </>
    )
  }
}

export default SetPin;