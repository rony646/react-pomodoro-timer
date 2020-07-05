import React from 'react'
import parseTime from '../../tools/parseTime'

function TimerCockpit(props) {
    return(
        <div>
            <div style={{fontSize: '50px'}}>
                <span>{parseTime(props.minutes)}</span>:<span>{parseTime(props.seconds)}</span>
            </div>
            <button onClick={props.pause}>Pause</button>
            <button onClick={props.resume}>Resume</button>
        </div>
    )
}

export default TimerCockpit