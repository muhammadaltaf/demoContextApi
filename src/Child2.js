import React, {useReducer} from 'react';
import './App.css';
import numberReducer from './numberReducer';

function Child2() {
  let [state,dispatch] = useReducer(numberReducer, 45)
  return (
    <div className="App">
      Child2 {state}
      <button onClick={()=>{ dispatch({type:"INCREMENT",val:35}) }}>Increment</button>
      <button onClick={()=>{ dispatch({type:"DECREMENT",val:35}) }}>Decrement</button>
    </div>
  );
}

export default Child2;
