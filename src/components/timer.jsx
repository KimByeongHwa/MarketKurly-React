import React from 'react';
import { useEffect, useState } from 'react';

function Timer() {    
    const [hour, setHour] = useState(23 - new Date().getHours());
    const [minute, setMinute] = useState(59 - new Date().getMinutes());
    const [second, setSecond] = useState(59 - new Date().getSeconds());

    useEffect( ()=> {
        const id = setInterval( () => {
            setHour(23 - new Date().getHours());
            setMinute(59 - new Date().getMinutes());
            setSecond(59 - new Date().getSeconds());
        }, 1000)
        return ( () => clearInterval(id));
    },[]);

    let padHour = String(hour).padStart(2, "0");
    let padMinute = String(minute).padStart(2, "0");
    let padSecond = String(second).padStart(2, "0");
    // console.log(padHour);
    
    return (
        <div>
            <span>{padHour}:{padMinute}:{padSecond}</span>
        </div>
    );
}

export default Timer;