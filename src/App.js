import React from 'react';
import TimerApp from './containers/TimerApp/TimerApp'


import icons from '../node_modules/font-awesome/css/font-awesome.min.css'
import classes from './App.css'

function App() {
  
  return (
    <React.Fragment>
      <div className={classes.Container}>
        {/* <button className={classes.InfoButton}>Click me!</button>  To do: make info button and the modal*/} 
        <TimerApp />
      </div>
    </React.Fragment>
  );
}

export default App