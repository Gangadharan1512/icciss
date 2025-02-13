/* eslint-disable no-unused-vars */
import React from "react";
import "./Registrations.css";

const Registrations = () => {
  return (
    <div>
    <div className="reg">
      <div className="amt">
        <h4>REGISTRATION DETAILS</h4>
        <table>
          <tr>
            <td>Industry</td>
            <td>: 2000</td>
          </tr>
          <tr>
            <td>Faculty/Academia</td>
            <td>: 1250</td>
          </tr>
          <tr>
            <td>Scholar/Student(UG/PG)</td>
            <td>: 1000</td>
          </tr>
          <tr>
            <td>Workshop(on spot)</td>
            <td>: 500</td>
          </tr>
        </table>
        <p>*Inclusive of (GST)</p>
      </div>

      <div className="mod">
        <div className="head">
          <h4>MODE OF PAYMENT</h4>
        </div>
        <div className="cont w">
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
    <div className="r"><ul><li><p>
        Please mention the Paper-id and name during the payment. The
        registration fee includes CD-ROM proceedings of accepted papers,
        conference kit, participation certificate, lunch, and refreshment.
        Prospective participants desirous of attending the conference are
        requested to fill the registration form through this link
        http://surl.li/ljtgaw and mail the same along with registration fee.
      </p>
        </li></ul></div>
    </div>
  );
};

export default Registrations;
