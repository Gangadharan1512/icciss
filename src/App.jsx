/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Cfp from './Components/CFP/CFP'
import Committee from './Components/Committee/Committee'
 import Publications from './Components/Publications/Publications'
import Registration from './Components/Registrations/Registration'
import Dates from './Components/Dates/Dates'
import Contact from './Components/Contact/Contact'
import Chief from './Components/Chief/Chief'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <div className="container">
        <Chief />
        <About />
        <Cfp />
        <Committee />
        <Publications />
        <Registration />
        <Dates />
      </div>
      <Contact />
      
    </div>
  )
}

export default App