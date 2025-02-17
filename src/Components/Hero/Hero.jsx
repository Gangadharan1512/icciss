/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Hero.css";
import sonamain from "../../assets/sonamain.jpg";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="content">
        <div className="top">
          <h1>Department of Computer Science and Engineering</h1>
          <h3>Organizes</h3>
          <h2>An International Conference</h2>
          <h3>on</h3>
          <h2>Computational Intelligence, Security and Systems <br />ICCISS'25</h2>
        </div>

        <div className="mid">
          <div className="left">
            <h3>3rd April 2025</h3>
            <h4>(Pre Conference Workshops)</h4>
            <div className="bullet">
            <p>
              UI-UX Design,
              Power BI
            </p></div>
          </div>
          <div className="right">
            <h3>4th April 2025</h3>
            <h4>(International Conference)</h4>
          </div>
        </div>
        <div className="bottom">
          <h3>Sponsored by</h3>
          <h1>ISTE, CSI(Salem Chapter) and IE(I) Salem</h1> 
          <h4>Convenor</h4>
          <h3>Dr. B. Sathiyabhama, Prof & HOD/CSE, SCT</h3>
          <h4>Co-Convenor</h4>
          <h3>Dr. S. Sakthivel, Prof & Deputy HOD/CSE, SCT</h3>
          <h4>Coordinators</h4>
          <div className="m">
            <div className="m2">
              <h3>Dr.A.C.Kaladevi</h3>
              <p>Professor/CSE  </p>
            </div>
            <div className="me">
              <h3> Dr.J.Jayanthi </h3>
              <p>Professor/CSE </p>
            </div>
            <div className="m2">
              <h3>Dr.S.Anitha Elavarasi</h3>
              <p> Associate Professor/CSE</p>
            </div>
            
            </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
