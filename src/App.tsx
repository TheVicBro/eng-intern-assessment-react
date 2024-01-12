import React, { useEffect, useState } from 'react'
import StopWatch from './StopWatch'
import StopWatchButton from './StopWatchButton'
import { formatTime } from './utils';

const App: React.FC = () => {
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [laps, setLaps] = useState<number[]>([])

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(time => time + 1)
            }, 1000)
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true)
    }
    const handleStop = () => {
        setIsRunning(false)
    }
    const handleReset = () => {
        setTime(0)
        setLaps([])
    }
    const handleLap = () => {
        setLaps(laps => [...laps, time])
    }

    return (
        <div>
            <StopWatch time={time} />
            <StopWatchButton
                onStart={handleStart}
                onStop={handleStop}
                onReset={handleReset}
                onLap={handleLap}
            />
            {laps.map((lap, index) => (
                <div key={index}>{formatTime(lap)}</div>
            ))}
        </div>
    )
}

export default App;