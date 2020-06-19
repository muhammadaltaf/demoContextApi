import React, {useState} from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './valueContext';

function App() {
  //let [number, setNumber] = useState(45)
  let value = 81;
  return (
    <ValueContext.Provider value={value}>
          <div className="App">
            Hello App component
            <Parent></Parent>
          </div>
    </ValueContext.Provider>
  );
}

export default App;
