import React, { useEffect} from 'react';
import useTimer  from 'react-timer-hook';
import TimerCockpit from '../../components/TimerCockpit/TimerCockpit'
import timerEndHandler from '../../tools/timerEndHandler'


function Timer() {
  
  useEffect(() => {
    console.log('[Timer.js] Mounted')
  }, [])


  const time = new Date()
  time.setSeconds(time.getSeconds() + 1501)
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