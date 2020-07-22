import React, {useState} from 'react';

import TimerApp from './containers/TimerApp/TimerApp'
import Modal from './components/UI/Modal/Modal'
import Footer from './components/Footer/Footer'
import InfoModalCockPit from './components/InfoModalCockpit/InfoModalCockpit';


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
        <Modal show={showing}>
            <InfoModalCockPit />
        </Modal>
        <div>
          <button onClick={showModalHandler} className={buttonClasses}></button>
        </div>
        <TimerApp />
        <Footer />
      </div>
  );
}

export default App