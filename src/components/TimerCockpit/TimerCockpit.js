import React from 'react'
import parseTime from '../../tools/parseTime'

import classes from './TimerCockpit.css'

function TimerCockpit(props) {
    return(
        <div>
            <div className={classes.TimerShow}>
                <span>{parseTime(props.minutes)}</span>:<span>{parseTime(props.seconds)}</span>
            </div>
            <button onClick={props.pause} className={[classes.ControlButton].join(' ')} >Pause</button>
            <button onClick={props.resume} className={classes.ControlButton} >Resume</button>
        </div>
    )
}

export default TimerCockpit