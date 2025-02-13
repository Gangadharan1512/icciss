/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./Dates.css";

const countTarget = new Date("2025-04-03T23:59:59");

const getTimeLeft = () => {
  const totalTimeLeft = countTarget - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const Dates = () => {
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
    <div className="dates">
      <h1>CONFERENCE DATE</h1>
      <div className="topd">
        <div className="confd">
          <div className="condt">
            <div className="conb">
              <p>
                <h3>3</h3> Apr'25
              </p>
            </div>
            <h4>Pre Conference Workshops</h4>
          </div>
          <div className="condt">
            <div className="conb">
              <p>
                <h3>4</h3> Apr'25
              </p>
            </div>
            <h4>International Conference</h4>
          </div>
        </div>
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

      <div className="impdt">
        <div className="dt">
          <div className="b">
            <p>
              <h3>27</h3> Feb'25
            </p>
          </div>
          <h4>Submission Deadline</h4>
        </div>
        <div className="dt w">
          <div className="b2">
            <p>
              <h3>10</h3>Mar'25
            </p>
          </div>
          <h4>Acceptance Notification</h4>
        </div>
        <div className="dt">
          <div className="b">
            <p>
              <h3>20</h3> Mar'25
            </p>
          </div>
          <h4>Last Date for Registration</h4>
        </div>
      </div>
    </div>
  );
};

export default Dates;
