import React, { useEffect, useState } from 'react';

import './TimeCountDown.scss';

export default function TimeCountDown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 59,
    seconds: 60,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        let { days, hours, minutes, seconds } = prevTimeLeft;

        seconds -= 1;

        if (seconds === 0 && minutes > 0) {
          minutes -= 1;
          seconds = 60;
        }

        if (minutes === 0 && hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 60;
        }

        if (hours === 0 && days > 0) {
          days -= 1;
          hours = 23;
          minutes = 59;
          seconds = 60;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="time-area-fs font-poppins">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex gap-[17px] items-end">
          <div className="time">
            <span>{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
            <p className="time-value font-inter">
              {value.toString().padStart(2, '0')}
            </p>
          </div>
          {unit !== 'seconds' && (
            <span className="semiclone mr-[17px]">
              <p>:</p>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
