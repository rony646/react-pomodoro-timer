import React, { useState } from 'react';
import Pomodoro from './components/Timers/Pomodoro'
import ShortBreak from './components/Timers/ShortBreak'
import LongBreak from './components/Timers/LongBreak'
import classes from './App.css'



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
  
    <div className={classes.App}>
      <h1 className={classes.Title}>Pomodoro Timer</h1>
      <div>
        <button className={classes.TimerButton} onClick={() => setTimerType('pomodoro')}>Pomodoro</button>
        <button className={classes.TimerButton} onClick={() => setTimerType('shortBreak')}>Short Break</button>
        <button className={classes.TimerButton} onClick={() => setTimerType('longBreak')}>Long Break</button>
      </div>
      {timer}
    </div>
  );
}

export default App