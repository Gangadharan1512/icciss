/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./Dates.css";


const Dates = () => {
  
  return (
    <div className="dates">
      <h2>IMPORTANT DATES</h2>
      <div className="impdt">
        <div className="dts">
          <div className="b">
            <p>
              <h3>27</h3> Feb'25
            </p>
          </div>
          <div className="text">
            <h4>Submission Deadline</h4>
          </div>
          
        </div>
        <div className="dts">
          <div className="b2">
            <p>
              <h3>10</h3>Mar'25
            </p>
          </div>
          <div className="text">
            <h4>Acceptance Notification</h4>
          </div>
          
        </div>
        <div className="dts">
          <div className="b">
            <p>
              <h3>20</h3> Mar'25
            </p>
          </div>
          <div className="text">
            <h4>Last Date for Registration</h4>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dates;
