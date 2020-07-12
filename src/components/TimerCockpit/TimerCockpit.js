import React, {useEffect} from 'react'
import parseTime from '../../tools/parseTime'

import classes from './TimerCockpit.css'
import  icons from '../../../node_modules/font-awesome/css/font-awesome.min.css'
import ControlButton from '../UI/Button/ControlButton'

function TimerCockpit(props) {
    useEffect(() => {
        console.log(icons['fa-play'])
    }, [])

    const currentTime = <div>
                            <span>{parseTime(props.minutes)}</span>:<span>{parseTime(props.seconds)}</span>
                        </div>

    if(props.running) {
        document.title = `${parseTime(props.minutes)}:${parseTime(props.seconds)} | Pomodoro Timer` // Set the page title acording to the time
    }
   

    return(
        <div>
            <div className={classes.TimerShow}>
                {currentTime}
            </div>
            
            <ControlButton type="stop" function={props.pause} /* prop function controls what the button does*//>
            <ControlButton type="play" function={props.resume} /* prop function controls what the button does*//>

        </div>
    )
}

export default TimerCockpit