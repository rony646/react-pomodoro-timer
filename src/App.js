import React from 'react';
import TimerApp from './containers/TimerApp/TimerApp'


import icons from '../node_modules/font-awesome/css/font-awesome.min.css'
import classes from './App.css'

function App() {
  
  return (
      <div className={classes.Container}>
        <button className={[classes.InfoButton, icons['fa'], icons['fa-info-circle']].join(' ')}></button>
        <TimerApp />
      </div>
  );
}

export default App