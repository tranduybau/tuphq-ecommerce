import React, { useEffect, useState } from 'react';

import './TimeCountDown.scss';

export default function TimeCountDown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 60,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        let { days, hours, minutes, seconds } = prevTimeLeft;
        seconds -= 1;

        if (seconds < 0) {
          minutes -= 1;
          seconds = 59;
        }
        if (minutes < 0) {
          hours -= 1;
          minutes = 59;
        }
        if (hours < 0) {
          days -= 1;
          hours = 23;
        }
        if (days < 0) {
          clearInterval(intervalId);
          return prevTimeLeft;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="time-area font-poppins">
      <div className="time">
        <div className="time-block">
          <p className="time-value">{timeLeft.hours}</p>
        </div>
        <span>Hours</span>
      </div>
      <div className="time">
        <div className="time-block">
          <p className="time-value">{timeLeft.days}</p>
        </div>
        <span>Days</span>
      </div>
      <div className="time">
        <div className="time-block">
          <p className="time-value">{timeLeft.minutes}</p>
        </div>
        <span>Minutes</span>
      </div>
      <div className="time">
        <div className="time-block">
          <p className="time-value">{timeLeft.seconds}</p>
        </div>
        <span>Seconds</span>
      </div>
    </div>
  );
}
