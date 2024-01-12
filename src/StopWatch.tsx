import React, { useEffect, useState } from 'react'
import { formatTime } from './utils';

const StopWatch: React.FC = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState<number[]>([]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(time => time + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    }

    const handleStop = () => {
        setIsRunning(false);
    }

    const handleReset = () => {
        setTime(0);
        setLaps([]);
    }

    const handleLap = () => {
        setLaps(laps => [...laps, time]);
    }

    return (
        <div>
            <div>{formatTime(time)}</div>
            <div>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleLap}>Lap</button>
            </div>
            <div data-testid="lap-list">
                {laps.map((lap, index) => (
                    <div key={index}>{formatTime(lap)}</div>
                ))}
            </div>
        </div>
    );
}

export default StopWatch;