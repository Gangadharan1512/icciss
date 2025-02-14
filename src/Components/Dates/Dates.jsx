/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./Dates.css";


const Dates = () => {
  
  return (
    <div className="dates">
      <h1>IMPORTANT DATES</h1>
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
