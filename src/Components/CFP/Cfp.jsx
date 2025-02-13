/* eslint-disable no-unused-vars */
import React from 'react'
import './Cfp.css'

const Cfp = () => {
  return (
    <div className='cfp'>
        <h2>CALL FOR PAPERS</h2>
        <h4>The topics of interest for submission of paper include, but are not limited to:</h4>
        <div className="sub">
            <div className="cfp-sub">
            <ul>
            <li>AI and its application</li>
            <li>Machine Learning and Deep Learning</li>
            <li>Intelligent Computing</li>
            <li>Quantum Inspired Evolutionary Computing</li>
            <li>Industrial Applications of IoT</li>
        </ul>
        </div>
        <div className="cfp-sub">
            <ul>
                <li>Trust, Privacy and Security</li>
                <li>Block Chain</li>
                <li>Information System and Technologies</li>
                <li>Social Network Analysis</li>
                <li>Geometric modeling, Graphics and Visualisation</li>
            </ul>
        </div>
        </div>
        <h4>Papers describing the original research in any of the above topics and related works are welcome.</h4>
        
        
    </div>
  )
}

export default Cfp