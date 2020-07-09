import React, {useEffect} from 'react'
import parseTime from '../../tools/parseTime'

import classes from './TimerCockpit.css'
import  icons from '../../../node_modules/font-awesome/css/font-awesome.min.css'

function TimerCockpit(props) {
    useEffect(() => {
        console.log(icons['fa-play'])
    }, [])
    return(
        <div>
            <div className={classes.TimerShow}>
                <span>{parseTime(props.minutes)}</span>:<span>{parseTime(props.seconds)}</span>
                <p style={{fontSize: '14px'}}>Beta Version 1.0</p>
            </div>
            <button 
                onClick={props.pause} 
                className={[classes.ControlButtonStop, icons['fa'], icons['fa-stop']].join(' ')}
            >
            </button>
            <button 
                onClick={props.resume} 
                className={[classes.ControlButton, icons['fa'], icons['fa-play'], classes.Green].join(' ')}
                id="play"
            >
            </button>
        </div>
    )
}

export default TimerCockpit