import React, {useContext} from 'react';
import './App.css';
import ValueContext from './valueContext';

function Child() {
  let value = useContext(ValueContext)
  let updatedValue = value[1]
  return (
    <div className="App">
      Child Component
      Number is {value[0]}
      <button onClick={()=>updatedValue(++value[0])}>Update Number</button>
    </div>
  );
}

export default Child;
