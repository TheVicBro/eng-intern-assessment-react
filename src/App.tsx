import React, { useEffect, useState } from 'react'
import StopWatch from './StopWatch'
import StopWatchButton from './StopWatchButton'

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

const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time - hours * 3600) / 60)
    const seconds = time - hours * 3600 - minutes * 60
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export default App;