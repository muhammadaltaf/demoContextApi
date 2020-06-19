import React from 'react';
import Child from './Child'
import './App.css';
import Child2 from './Child2';

function Parent() {
  return (
    <div className="App">
      Parent Component
      <Child/>
      <Child2></Child2>
    </div>
  );
}

export default Parent;
