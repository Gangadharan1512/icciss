/* eslint-disable no-unused-vars */
import React ,{ useState, useEffect } from 'react'
import './Countdown.css'


const countTarget = new Date("2025-04-03T23:59:59");

const getTimeLeft = () => {
  const totalTimeLeft = countTarget - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};


const Countdown = () => {

    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });


  return (
    <div className='count'>
        <h2>COUNTDOWN</h2>
        <div className="ctdn">
          <div className="box wh">
            <div className="value">
              <span>{timeLeft.days}</span>
            </div>
            <span className="label">{"DAYS"}</span>
          </div>

          <div className="box bl">
            <div className="value">
              <span>{timeLeft.hours}</span>
            </div>
            <span className="label">{"HOURS"}</span>
          </div>

          <div className="box wh">
            <div className="value">
              <span>{timeLeft.minutes}</span>
            </div>
            <span className="label">{"MINUTES"}</span>
          </div>

          <div className="box bl">
            <div className="value">
              <span>{timeLeft.seconds}</span>
            </div>
            <span className="label">{"SECONDS"}</span>
          </div>
        </div>

    </div>
  )
}

export default Countdown