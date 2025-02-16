/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
import sona from "../../assets/sona.jpg";
import confer from "../../assets/confer.jpg";
import dept from "../../assets/dept.jpg";
import vei from "../../assets/vei.jpg";

const About = () => {
  return (
    <div className="about">
      <h2>ABOUT US</h2>
      <div className="abt-con w">
        <div className="abt-left">
          <h1>About Sona</h1>
          <p>
            Sona College of Technology has achieved global identity through its
            involvement in research in recent technology and successful
            completion of projects and products. The college is known for its
            rich tradition and high values bestowed upon by its Founder
            Chairman, Thiru. M.S. Chockalingam. The college is awarded with
            "AICTE-CII Award for Best Industry-Linked Technical Institute in
            India consecutively for 6 years from 2014 to 2019" and acclaimed
            'A++' grade by 'NAAC' that stand testimony to the commitment of the
            college to impart quality education. Sona is a proud recipient of
            "Entrepreneur Award" from MHRD, New Delhi, for Emerging Global
            Destination for education. Sona has been accorded recognition as a
            Scientific and Industrial Research Organization (SIRO) by the
            Department of Scientific and Industrial Research (DSIR), New Delhi.
            Sona College of Technology is equipped with world class
            infrastructure, highly qualified and experienced faculty members,
            and an active Placement Training and Welfare Cell.
          </p>
        </div>
        <div className="abt-right">
          <img src={sona} alt="" />
        </div>
      </div>
      <div className="abt-con">
        <div className="abt-right">
          <img src={confer} alt="" />
        </div>
        <div className="abt-left">
          <h1>About the Conference</h1>
          <p>
            The main objective of the International Conference on Computational
            Intelligence, Security and Systems (ICCISS '25) is a biennial
            conference that brings together the academicians, scientists,
            student innovators and industrial experts of various domains spread
            throughout the nation, in a single forum to present innovative
            research ideas, developmental activities, discuss problems and
            solutions, identify recent trends and to shape future directions of
            research. This conference aims at providing a red carpet knowledge
            sharing platform for the presentation and discussion of recent
            innovations and technical advancements put forth by the researchers,
            students, engineers and academicians. This conference will set the
            right path for innovators through the valuable guidance and
            suggestions of eminent scholars, scientists and industrial experts.
          </p>
        </div>
      </div>

      <div className="abt-con w">
        <div className="left">
        <h1>About The Department</h1>
        <p>
          The Department of Computer Science and Engineering was incepted with
          the vision of creating the most conducive environment for quality
          academic and research education. The department has achieved many
          laurels and milestones owing to the unswerving efforts by the faculty
          team. The department has also produced many high quality publications
          in Journals with impact factors and quality conferences at national
          and international level. The department is an approved research centre
          under Anna University, Chennai. The department has two PG programs and
          three UG programs.
        </p>
      </div>
      <div className="abt-right">
        <img src={dept} alt="" />
      </div>
      </div>


      <div className="abt-con">
        <div className="abt-right">
          <img src={vei} alt="" />
        </div>

        <div className="abt-left">
        <h1>About VEI Technologies</h1>
        <p>
          VEI Technologies provides a broad range of IT consulting, web
          application and outsourcing services through an optimized technique.
          It focuses on delivering business solutions for our clients' business
          processes. We serve industry leaders as they need to improve their
          customer experience, expand market reach and improve time to market
          high professional and dedicated workers.
        </p>
      </div>
      </div>
    </div>
  );
};

export default About;
