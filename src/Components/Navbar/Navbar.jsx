/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menuicon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to="hero" smooth={true} offset={-100} duration={700}>Home</Link></li>
        <li><Link to="about" smooth={true} offset={-100} duration={700}>About</Link></li>
        <li><Link to="dates" smooth={true} offset={-100} duration={700}>Conference</Link></li>
        <li><Link to="cfp" smooth={true} offset={-100} duration={700}>Call For Papers</Link></li>
        <li><Link to="pub" smooth={true} offset={-100} duration={700}>Publications</Link></li>
        <li><Link to="reg" smooth={true} offset={-100} duration={700}>Registrations</Link></li>
        <li><Link to="committee" smooth={true} offset={-100} duration={700}>Committee</Link></li>
        <li><Link to="contact" smooth={true} offset={-100} duration={700}>Contact Us</Link></li>
      </ul>
      <img src={menuicon} alt="" className="menuicon" onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
