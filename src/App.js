import React from 'react';
import TimerApp from './containers/TimerApp/TimerApp'

import classes from './App.css'

function App() {
  
  return (
    <div className={classes.Container}>
      <button>click me</button>
      <TimerApp />
    </div>
  );
}

export default App