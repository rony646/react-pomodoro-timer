import React from 'react';

import ReactPlayer from 'react-player';

const InfoModalCockPit = () => {
   return(
        <div>
        <h3>How does it work?</h3>
        <p style={{fontSize: '0.8rem', padding: '0px 20px'}}>
            The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. 
            The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, 
            separated by short breaks.
        </p>
        <h4>Check more in this video: </h4>
        <div style={{padding: '15px'}}>
            <ReactPlayer
                url="https://www.youtube.com/watch?time_continue=50&v=ykMzzZolhdk&feature=emb_title"
                width="100%"
                height="185px">
            </ReactPlayer>
        </div>
        </div>
   )
};

export default InfoModalCockPit;