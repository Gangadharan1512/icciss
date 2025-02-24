/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Contact.css'
import phone_icon from'../../assets/phone.png'
import mail_icon from'../../assets/mail.png'
import www from '../../assets/www.png'

const Contact = () => {
  return (
    <div className='contact'>
        <p>All correspondence to be sent to: </p>
        <p> THE CONVENOR, ICCISS '25</p>
        <p>Department of Computer Science & Engineering</p>
        <p>Sona College of Technology</p>
        <p>Junction Main Road, Salem - 636 005</p>
        <div className='details1'><img src={phone_icon} alt="" /><p> : <a href="tel:+91 99420 29528">+91 99420 29528</a>,<a href="tel:98841 28486">98841 28486</a> ,<a href="tel:94430 08968"> 94430 08968</a></p></div>
        <div className='details'><div className="det"><img src={mail_icon} alt="" /><p> : <a href="mailto:icciss-25@sonatech.ac.in ">icciss-25@sonatech.ac.in </a>| </p></div><div className="det"><img src={www} alt="" /><p> : <a href="www.sonatech.ac.in/icciss-25" target="_blank" rel="noopener noreferrer">www.sonatech.ac.in/icciss-25</a></p></div></div>
    </div>
  )
}

export default Contact