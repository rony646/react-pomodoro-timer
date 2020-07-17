import React, {useState} from 'react';

import TimerApp from './containers/TimerApp/TimerApp'
import Modal from './components/UI/Modal/Modal'


import icons from '../node_modules/font-awesome/css/font-awesome.min.css'
import classes from './App.css'

function App() {
  

  
  

  let [showing, setShowing] = useState(false)

  let buttonClasses = [classes.InfoButton, icons['fa'], icons['fa-times-circle']].join(' ')

  if(!showing) {
    buttonClasses = [classes.InfoButton, icons['fa'], icons['fa-info-circle']].join(' ')
  }

  function showModalHandler() {
    setShowing(showing = !showing)
  }
  
  return (
      <div className={classes.Container}>
        {console.log('[APP.JS]', showing)}
        <Modal show={showing}>
          <h3>How does it work?</h3>
          <p style={{fontSize: '0.8rem', padding: '0px 20px'}}>
            The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. 
            The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, 
            separated by short breaks.
          </p>
          <h4>Check more in this video: </h4>
          
        </Modal>
        <button onClick={showModalHandler} className={buttonClasses}></button>
        <TimerApp />
      </div>
  );
}

export default App