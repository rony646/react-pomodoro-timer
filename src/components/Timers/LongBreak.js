import React, { useEffect, useState } from 'react';
import useTimer  from 'react-timer-hook';
import TimerCockpit from '../TimerCockpit/TimerCockpit'
import timerEndHandler from '../../tools/timerEndHandler'



function Timer() {

  const time = new Date()
  time.setSeconds(time.getSeconds() + 601)
  
  let {
    seconds,
    minutes,
    stopTimer,
    resume
  } = useTimer({ autoStart: false, onExpire: () => timerEndHandler(), expiryTimestamp: time});

  
  return(
    <div>
      <TimerCockpit
        seconds={seconds}
        minutes={minutes} 
        pause={stopTimer} 
        resume={resume}/>
    </div>
  )
}

export default Timer