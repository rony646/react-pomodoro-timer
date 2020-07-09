import React, {useEffect} from 'react'
import parseTime from '../../tools/parseTime'

import classes from './TimerCockpit.css'
import  icons from '../../../node_modules/font-awesome/css/font-awesome.min.css'

function TimerCockpit(props) {
    useEffect(() => {
        console.log(icons['fa-play'])
    }, [])

    const currentTime = <div>
                            <span>{parseTime(props.minutes)}</span>:<span>{parseTime(props.seconds)}</span>
                        </div>

    if(props.running) {
        document.title = `${parseTime(props.minutes)}:${parseTime(props.seconds)} | Pomodoro Timer` // Set the page title acording to the time
    } else {
        document.title =  'Time is over'
    }
   

    return(
        <div>
            <div className={classes.TimerShow}>
                {currentTime}
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