import React, { useEffect} from 'react';
import useTimer  from 'react-timer-hook';
import parseTime from '../../tools/parseTime'


function Timer() {
  
  useEffect(() => {
    console.log('[Timer.js] Mounted')
  }, [])


  const time = new Date()
  time.setSeconds(time.getSeconds() + 1501)
  let {
    seconds,
    minutes,
    startTimer,
    stopTimer,
    resume
  } = useTimer({ autoStart: false, onExpire: () => alert('Timer is over!'), expiryTimestamp: time});
  
  return(
    <div>
      <div style={{fontSize: '50px'}}>
       <span>{parseTime(minutes)}</span>:<span>{parseTime(seconds)}</span>
      </div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Pause</button>
      <button onClick={resume}>Resume</button>
    </div>
  )
}

export default Timer