import React, { useState } from 'react';
import Pomodoro from './components/Timers/Pomodoro'
import ShortBreak from './components/Timers/ShortBreak'
import LongBreak from './components/Timers/LongBreak'



function App() {
  const [timerType, setTimerType] = useState('pomodoro')

  let timer = null

  if(timerType === 'pomodoro') {
    timer = <Pomodoro />
  }

  if(timerType === 'shortBreak') {
    timer = <ShortBreak />
  }

  if(timerType === 'longBreak') {
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