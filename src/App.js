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
          test
        </Modal>
        <button onClick={showModalHandler} className={buttonClasses}></button>
        <TimerApp />
      </div>
  );
}

export default App