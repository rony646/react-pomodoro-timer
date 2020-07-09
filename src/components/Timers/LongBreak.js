import React from 'react';
import useTimer  from 'react-timer-hook';
import TimerCockpit from '../TimerCockpit/TimerCockpit'
import timerEndHandler from '../../tools/timerEndHandler'


function Timer() {

  const time = new Date()
  time.setSeconds(time.getSeconds() + 10)
  
  let {
    seconds,
    minutes,
    stopTimer,
    resume,
    isRunning
  } = useTimer({ autoStart: false, onExpire: () => timerEndHandler(), expiryTimestamp: time});

  
  return(
    <div>
      <TimerCockpit
        seconds={seconds}
        minutes={minutes} 
        pause={stopTimer} 
        resume={resume}
        running={isRunning}/>
    </div>
  )
}

export default Timer