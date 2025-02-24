/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
import sona from "../../assets/sona.jpg";
import dept from "../../assets/dept.jpg";

const About = () => {
  return (
    <div className="about">
      <h2>ABOUT US</h2>
      <div className="abt">
        <h1>About Sona</h1>
        <div className="subabt">
          <div className="abtcon">
            <p>
              Sona College of Technology has achieved global identity through
              its involvement in research in recent technology and successful
              completion of projects and products. The college is known for its
              rich tradition and high values bestowed upon by its Founder
              Chairman, Thiru. M.S. Chockalingam. The college is awarded with
              "AICTE-CII Award for Best Industry-Linked Technical Institute in
              India consecutively for 6 years from 2014 to 2019" and acclaimed
              'A++' grade by 'NAAC' that stand testimony to the commitment of
              the college to impart quality education. Sona is a proud recipient
              of "Entrepreneur Award" from MHRD, New Delhi, for Emerging Global
              Destination for education. Sona has been accorded recognition as a
              Scientific and Industrial Research Organization (SIRO) by the
              Department of Scientific and Industrial Research (DSIR), New
              Delhi. Sona College of Technology is equipped with world class
              infrastructure, highly qualified and experienced faculty members,
              and an active Placement Training and Welfare Cell.
            </p>
          </div>
          <div className="abtimg">
            <img src={sona} alt="" />
          </div>
        </div>
      </div>

      <div className="abt">
        <h1>About the Department</h1>
        <div className="subabt">
          <div className="abtimg">
            <img src={dept} alt="" />
          </div>
          <div className="abtcon">
            <p>
              The Department of Computer Science and Engineering was incepted
              with the vision of creating the most conducive environment for
              quality academic and research education. The department has
              achieved many laurels and milestones owing to the unswerving
              efforts by the faculty team. The department has also produced many
              high quality publications in Journals with impact factors and
              quality conferences at national and international level. The
              department is an approved research centre under Anna University,
              Chennai. The department has two PG programs and three UG programs.
            </p>
          </div>
        </div>
      </div>

      <div className="abt">
        <h1>About the Conference</h1>
        <p>
          The main objective of the International Conference on Computational
          Intelligence, Security and Systems (ICCISS '25) is a biennial
          conference that brings together the academicians, scientists, student
          innovators and industrial experts of various domains spread throughout
          the nation, in a single forum to present innovative research ideas,
          developmental activities, discuss problems and solutions, identify
          recent trends and to shape future directions of research. This
          conference aims at providing a red carpet knowledge sharing platform
          for the presentation and discussion of recent innovations and
          technical advancements put forth by the researchers, students,
          engineers and academicians. This conference will set the right path
          for innovators through the valuable guidance and suggestions of
          eminent scholars, scientists and industrial experts.
        </p>
      </div>
    </div>
  );
};

export default About;
