/* eslint-disable no-unused-vars */
import React from "react";
import "./Registrations.css";

const Registrations = () => {
  return (
    <div className="main">
      <div className="reg">
        <div className="amt">
          <h4>REGISTRATION DETAILS</h4>
          <table>
            <tr>
              <td>Industry</td>
              <td>: Rs. 2000*</td>
            </tr>
            <tr>
              <td>Faculty/Academia</td>
              <td>: Rs. 1250*</td>
            </tr>
            <tr>
              <td>Scholar/Student(UG/PG)</td>
              <td>: Rs. 1000*</td>
            </tr>
            <tr>
              <td>Workshop(on spot)</td>
              <td>: Rs. 500*</td>
            </tr>
          </table>
          <p>*Inclusive of (GST)</p>
        </div>

        <div className="mod">
          <div className="head">
            <h4>MODE OF PAYMENT</h4>
          </div>
          <div className="cont">
            <p>
              The Fee is to paid through NEFT/RTGS to the following savings
              account
            </p>
            <table>
              <tr>
                <td>Acct Number</td>
                <td> : 500101012509147</td>
              </tr>
              <tr>
                <td>Bank</td>
                <td> : City Union Bank</td>
              </tr>
              <tr>
                <td>Branch</td>
                <td> : Salem Main</td>
              </tr>
              <tr>
                <td>IFSC Code</td>
                <td> : CIUB0000042</td>
              </tr>
              <tr>
                <td>MICR Code</td>
                <td> : 636054002</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="r">
        <ul>
          <li>
            <p>
              Kindly ensure that your paper is formatted as per IEEE Template
              (not exceeding 5 pages).
            </p>
          </li>
          <li>
            <p>
              All submissions will be double-blind peer-reviewed by experts
              based on its research significance, novelty and clarity.
            </p>
          </li>
          <li>
            <p>
              At least one author should register and present their paper in
              conference.
            </p>
          </li>
          <li>
            <p>
              The registration fee includes conference kit, participation
              e-certificate and lunch, and refreshment for offline participants.
            </p>
          </li>
          <li>
            <p>
              For online participants e-certificates will be mailed to their
              registered mail-id.
            </p>
          </li>
          <li>
            <p>
              Participants are requested to fill the registration form through
              this link{" "}
              <a href="http://surl.li/ljtgaw" target="_blank" rel="noopener noreferrer">http://surl.li/ljtgaw</a>
            </p>
          </li>
        </ul>
      </div>
      <div className="pp">
      <h4>PLAGIARISM POLICY</h4>
      <div className="r2">
        <ul>
          <li><p>The paper prior to submission should be checked for plagiarism from
          licensed plagiarism software.</p></li>
          <li><p>The plagiarism content should notexceed 10%. </p></li>
          <li><p>Any kind of self-plagiarism or plagiarism from thework(s) of others should be avoided in an article. If you use a
          model/ concept/ figure/ table/ data/ conclusive comment from a previously
          published work in your paper, you must properly cite the source work.</p></li> 
          <li><p>If you are using any copyrighted material, a prior permission should
          be taken from the copyright holder.</p></li>
        </ul>
      </div></div>
    </div>
  );
};

export default Registrations;
