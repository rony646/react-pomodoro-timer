import React from 'react'

import classes from './ControlButton.css'
import icons from '../../../../node_modules/font-awesome/css/font-awesome.min.css'

function ControlButton(props) {
    let setClasses;

    if(props.type === "play") {
        setClasses = [classes.ControlButton, icons['fa'], icons['fa-play'], classes.Green].join(' ');
    } else {
        setClasses = [classes.ControlButtonStop, icons['fa'], icons['fa-stop']].join(' ');
    }

    return(
        <button 
            className={setClasses}
            onClick={props.function}>
        </button>
    )
}

export default ControlButton