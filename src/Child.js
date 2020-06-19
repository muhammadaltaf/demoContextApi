import React, {useContext} from 'react';
import './App.css';
import ValueContext from './valueContext';

function Child() {
  let value = useContext(ValueContext)
  return (
    <div className="App">
      Child Component
      Number is {value}
    </div>
  );
}

export default Child;
