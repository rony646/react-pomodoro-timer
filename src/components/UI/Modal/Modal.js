import React from 'react'

import classes from './Modal.css'

function Modal(props) {
    console.log('[MODAL.JS] ', props.show)
    return(
        <div className={classes.Modal} style={{transform: props.show ? 'translateY(0vh)' : 'translateY(-150vh)'}}>
            {props.children}
        </div>
        
    )
};

export default Modal