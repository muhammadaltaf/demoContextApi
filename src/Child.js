import React from 'react';
import './App.css';

function Child(props) {
  return (
    <div className="App">
      Number is {props.num}
    </div>
  );
}

export default Child;
