import { useEffect, useState } from "react";
import './TimeCountDown.scss'

export default function TimeCountDown() {
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
        <span className='time-area-fs'>
            <div className='time'>
                <h5 className="font-poppins">Days</h5>
                {dayLeft > 9 && <p className='time-value font-inter'>{dayLeft}</p>}
                {dayLeft < 10 && <p className='time-value font-inter'>0{dayLeft}</p>}
            </div>
            <span className='semiclone'>
                <p>:</p>
            </span>
            <div className='time'>
                <h5 className="font-poppins">Hours</h5>
                <p className='time-value font-inter'>{hourLeft}</p>
            </div>
            <span className='semiclone'>
                <p>:</p>
            </span>
            <div className='time'>
                <h5 className="font-poppins">Minutes</h5>
                <p className='time-value font-inter'>{minuteLeft}</p>
            </div>
            <span className='semiclone'>
                <p>:</p>
            </span>
            <div className='time'>
                <h5 className="font-poppins">Seconds</h5>
                <p className='time-value font-inter'>{secondLeft}</p>
            </div>
        </span>
    )
}