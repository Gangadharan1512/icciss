/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="content">
      <div className="top">
        <h2>Department of Computer Science and Engineering</h2>
        <h3>Orgainzes</h3>
        <h1>An International Conference<h3>on</h3>Computational Intelligence, Security and Systems<br/>(ICCISS'25)</h1>

      </div>
      <div className="bottom">
        <div className="dt">
          <div className="left">
              <h3 style={{lineHeight : 1}}>3rd April 2025 <br/>(Pre Conference Workshops) <br /> UI-UX Design, Power BI</h3>
          </div>
          <div className="right">
            <h3 style={{lineHeight : 1}}>4th April 2025 <br />(International Conference)</h3>
          </div>
        </div>
        <h3>Sponsored by</h3>
        <h3  className="last" >ISTE, CSI(Salem Chapter) and IE(I) Salem</h3>
      </div>


        
      </div>
    </div>
  );
};

export default Hero;


{/* <div className="top">
          <h1>Department of Computer Science and Engineering</h1>
          <h3>Organizes</h3>
          <h2>An International Conference</h2>
          <h3>on</h3>
          <h2>
            Computational Intelligence, Security and Systems <br />
            ICCISS'25
          </h2>
        </div>

        <div className="mid">
          <div className="left">
            <h3>3rd April 2025</h3>
            <h4>(Pre Conference Workshops)</h4>
            <div className="bullet">
              <p>UI-UX Design, Power BI</p>
            </div>
          </div>
          <div className="right">
            <h3>4th April 2025</h3>
            <h4>(International Conference)</h4>
          </div>
        </div>
        <div className="bottom">
          <h3>Sponsored by</h3>
          <h1>ISTE, CSI(Salem Chapter) and IE(I) Salem</h1>
        </div> */}