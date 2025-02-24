/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menuicon from "../../assets/menu-icon.png";



const countTarget = new Date("2025-04-03T23:59:59");

const getTimeLeft = () => {
  const totalTimeLeft = countTarget - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};



const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  // Sticky Navbar on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="navbar">
    <div><nav className={`containers ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="logo" className="logo" />
      <img src={menuicon} alt="menu" className="menuicon" onClick={toggleMenu} />
      

      <ul className={mobileMenu ? "mobile-menu-open" : ""}>
        <li><Link to="hero" smooth={true} offset={-100} duration={700} onClick={toggleMenu}>Home</Link></li>
        <li><Link to="about" smooth={true} offset={-100} duration={700} onClick={toggleMenu}>About Us</Link></li>
        <li><Link to="cfp" smooth={true} offset={-100} duration={700} onClick={toggleMenu}>Call For Papers</Link></li>
        <li><Link to="committee" smooth={true} offset={-100} duration={700} onClick={toggleMenu}>Committee</Link></li>
        <li><Link to="pub" smooth={true} offset={-100} duration={700} onClick={toggleMenu}>Publications</Link></li>
        <li><Link to="reg" smooth={true} offset={-100} duration={700} onClick={toggleMenu}>Registrations</Link></li>
        <li><Link to="dates" smooth={true} offset={-100} duration={700} onClick={toggleMenu}>Important Dates</Link></li>
        <li><Link to="contact" smooth={true} offset={-100} duration={700} onClick={toggleMenu}>Contact Us</Link></li>
      </ul>
    </nav>
    </div>
    <div className="countdown">
          <div className="cdsub">
            <div className="subcd">
              <h1>{timeLeft.days}</h1>
              <p>Days</p>
            </div>
                <div className="subcd">
                     <h1>{timeLeft.hours}</h1>
                     <p>Hours</p>
                </div>
          </div>
          <div className="cdsub">
            <div className="subcd">
              <h1>{timeLeft.minutes}</h1>
              <p>Mins</p>
            </div>
          <div className="subcd">
            <h1>{timeLeft.seconds}</h1>
            <p>Sec</p>
          </div>
          
          </div>
    </div>
    </div>
  );
};

export default Navbar;
