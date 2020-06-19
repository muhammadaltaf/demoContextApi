import React from 'react';
import Child from './Child'
import './App.css';

function Parent() {
  return (
    <div className="App">
      Parent Component
      <Child/>
    </div>
  );
}

export default Parent;
