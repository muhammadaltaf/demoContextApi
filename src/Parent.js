import React from 'react';
import Child from './Child'
import './App.css';

function Parent(props) {
  return (
    <div className="App">
      <Child num={props.num}/>
    </div>
  );
}

export default Parent;
