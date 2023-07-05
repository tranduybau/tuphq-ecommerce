import React, { useEffect, useState } from 'react';

import './TimeCountDown.scss';

export default function TimeCountDown() {
  const [secondLeft, setSecondLeft] = useState(60);
  const [minuteLeft, setMinuteLeft] = useState(59);
  const [hourLeft, setHourLeft] = useState(23);
  const [dayLeft, setDayLeft] = useState(5);

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
    if (secondLeft === 0 && minuteLeft === 0 && hourLeft === 0) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [secondLeft, minuteLeft, hourLeft, dayLeft]);
  return (
    <span className="time-area">
      <div className="time">
        <div className="time-block">
          <p className="time-value font-poppins">{hourLeft}</p>
        </div>
        <h5 className="font-poppins">Hours</h5>
      </div>
      <div className="time">
        <div className="time-block">
          <p className="time-value font-poppins">{dayLeft}</p>
        </div>
        <h5 className="font-poppins">Days</h5>
      </div>
      <div className="time">
        <div className="time-block">
          <p className="time-value font-poppins">{minuteLeft}</p>
        </div>
        <h5 className="font-poppins">Minutes</h5>
      </div>
      <div className="time">
        <div className="time-block">
          <p className="time-value font-poppins">{secondLeft}</p>
        </div>
        <h5 className="font-poppins">Seconds</h5>
      </div>
    </span>
  );
}
