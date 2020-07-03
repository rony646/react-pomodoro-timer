import React from 'react';
import Timer from './components/Timer/Timer'


function App() {
 
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Pomodoro Timer: </h1>
      <button>Pomodoro</button>
      <button>Short Break</button>
      <button>Long Break</button>
      <Timer />
    </div>
  );
}

export default App