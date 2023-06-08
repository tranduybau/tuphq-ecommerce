import { useEffect, useState } from "react";
import './TimeCountDown.scss'

export default function TimeCountDown(){
    const [secondLeft, setSecondLeft] = useState(60); // 60 giây
    const [minuteLeft, setMinuteLeft] = useState(59); // 60 phút
    const [hourLeft, setHourLeft] = useState(23); // 23 giờ
    const [dayLeft, setDayLeft] = useState(3); // 

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (secondLeft > 0) {
                setSecondLeft(secondLeft - 1);
            } else if (minuteLeft > 0) {
                setMinuteLeft(minuteLeft - 1);
                setSecondLeft(60);
            } else if (hourLeft > 0) {
                setHourLeft(hourLeft - 1);
                setMinuteLeft(59);
                setSecondLeft(60);
            } else if (dayLeft > 0) {
                setDayLeft(dayLeft - 1);
                setHourLeft(23);
                setMinuteLeft(59);
                setSecondLeft(60);
            }
        }, 1000);

        // Clear interval when finished counting down to 0
        if (secondLeft === 0 && minuteLeft === 0 && hourLeft === 0) {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [secondLeft, minuteLeft, hourLeft, dayLeft]);
    return (
        <span className='time-area'>
            <div className='time'>
                <h5>Days</h5>
                <div className='time-block'>
                    <p className='time-value'>{dayLeft}</p>
                    <span className='semiclone'><p>:</p></span>
                </div>
            </div>
            <div className='time'>
                <h5>Hours</h5>
                <div className="time-block">
                    <p className='time-value'>{hourLeft}</p>
                    <span className='semiclone'><p>:</p></span>
                </div>
            </div>
            <div className='time'>
                <h5>Minutes</h5>
                <div className="time-block">
                    <p className='time-value'>{minuteLeft}</p>
                    <span className='semiclone'><p>:</p></span>
                </div>
            </div>
            <div className='time'>
                <h5>Seconds</h5>
                <div className="time-block">
                    <p className='time-value'>{secondLeft}</p>
                </div>
            </div>
        </span>
    )
}