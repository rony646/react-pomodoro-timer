import React from 'react';
import useTimer  from 'react-timer-hook';


function Timer() {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 1500)
  let {
    seconds,
    minutes,
    startTimer,
    stopTimer,
    resume
  } = useTimer({ autoStart: false, onExpire: () => alert('Timer is over!'), expiryTimestamp: time });

  function parseTime(seconds) {
    if(seconds <= 9) {
      return seconds = "0" + seconds;
    }
    else {
      return seconds
    }
  }
  
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

export default Timer;