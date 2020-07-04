import React, { useState } from 'react';
import Pomodoro from './components/Timer/Pomodoro'
import ShortBreak from './components/Timer/ShortBreak'
import LongBreak from './components/Timer/LongBreak'



function App() {
  const [timerType, setTimerType] = useState('pomodoro')

  let timer = null

  if(timerType == 'pomodoro') {
    timer = <Pomodoro />
  }

  if(timerType == 'shortBreak') {
    timer = <ShortBreak />
  }

  if(timerType == 'longBreak') {
    timer = <LongBreak />
  }
  
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Pomodoro Timer: </h1>
      <button onClick={() => setTimerType('pomodoro')} >Pomodoro</button>
      <button onClick={() => setTimerType('shortBreak')}>Short Break</button>
      <button onClick={() => setTimerType('longBreak')}>Long Break</button>
      {timer}
    </div>
  );
}

export default App