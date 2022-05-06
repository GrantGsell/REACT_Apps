import React, { useState, useEffect } from 'react';

const Timer = () => {
    // seconds stores the value of our timer
    const [seconds, setSeconds] = useState(5);
    
    // isActive stores teh timers state (paused, running)
    const [isActive, setIsActive] = useState(false);
    
    // count (number of pauses) stores the number of times the countdown has reached 0 (-1), 
    const [count, setCount] = useState(0);

    // Flips the isActive flag to put the timer in a run state or pause state
    function toggle() {
        setIsActive(!isActive);
    }
    
    // Function to reset the timer
    function reset() {
        setSeconds(5);
        setIsActive(false);
    }
    
    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
            if(seconds === -1){
                reset();
                setCount(count => count + 1);
                setIsActive(true);
            }
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
            setCount(0);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    // Styling for the timer
    return (
        <div className="app">
            <div className="time">
                Countdown: {seconds}
            </div>
            <div className="counter">
                Number of Pauses: {count}
            </div>
            <div className="row">
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className="button" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Timer;