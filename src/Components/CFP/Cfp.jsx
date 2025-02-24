/* eslint-disable no-unused-vars */
import React from 'react'
import './Cfp.css'

const Cfp = () => {
  return (
    <div className='cfp'>
        <h2>CALL FOR PAPERS</h2>
        <p>The topics of interest for submission of paper include, but are not limited to:</p>
        <div className="sub">
            <div className="cfp-sub">
            <ul>
            <li><p>AI and its application</p></li>
            <li><p>Machine Learning and Deep Learning</p></li>
            <li><p>Intelligent Computing</p></li>
            <li><p>Quantum Inspired Evolutionary Computing</p></li>
            <li><p>Industrial Applications of IoT</p></li>
        </ul>
        </div>
        <div className="cfp-sub">
            <ul>
                <li><p>Trust, Privacy and Security</p></li>
                <li><p>Block Chain</p></li>
                <li><p>Information System and Technologies</p></li>
                <li><p>Social Network Analysis</p></li>
                <li><p>Geometric modeling, Graphics and Visualisation</p></li>
            </ul>
        </div>
        </div>
        <p>Papers describing the original research in any of the above topics and related works are welcome.</p>
        <p>Submit your paper to the mailID : <a href="mailto:icciss-25@sonatech.ac.in">icciss-25@sonatech.ac.in</a></p>
        
        
    </div>
  )
}

export default Cfp