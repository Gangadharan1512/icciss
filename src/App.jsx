/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Committee from './Components/Committee/Committee'
import Cfp from './Components/CFP/Cfp'
import Publications from './Components/Publications/Publications'
import Registrations from './Components/Registrations/Registrations'
import Dates from './Components/Dates/Dates'
import Contact from './Components/Contact/Contact'
import Countdown from './Components/CountDown/Countdown'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <div className="container">
        <Countdown />
        <Dates />
        <About />
        <Cfp />
        <Publications />
        <Registrations />
        <Committee />
        
      </div>
      <Contact />
    </div>
  )
}

export default App