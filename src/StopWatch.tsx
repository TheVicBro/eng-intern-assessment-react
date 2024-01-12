import React from 'react'

interface StopWatchProps {
    time: number // in seconds
}

const StopWatch: React.FC<StopWatchProps> = ({ time }) => {
    return (
        <div>{formatTime(time)}</div>
    )
}

const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time - hours * 3600) / 60)
    const seconds = time - hours * 3600 - minutes * 60
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export default StopWatch;