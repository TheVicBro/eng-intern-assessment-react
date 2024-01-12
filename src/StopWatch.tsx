import React from 'react'
import { formatTime } from './utils';

interface StopWatchProps {
    time: number // in seconds
}

const StopWatch: React.FC<StopWatchProps> = ({ time }) => {
    return (
        <div>{formatTime(time)}</div>
    )
}

export default StopWatch;