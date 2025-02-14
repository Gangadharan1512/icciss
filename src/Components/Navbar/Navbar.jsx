/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menuicon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

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
    <nav className={`containers ${sticky ? "dark-nav" : ""}`}>
      <img src={menuicon} alt="menu" className="menuicon" onClick={toggleMenu} />
      <img src={logo} alt="logo" className="logo" />

      <ul className={mobileMenu ? "mobile-menu-open" : ""}>
        <li><Link to="hero" smooth={true} offset={-100} duration={700} onClick={toggleMenu}>Home</Link></li>
        <li><Link to="about" smooth={true} offset={-100} duration={700} onClick={toggleMenu}>About</Link></li>
        <li><Link to="dates" smooth={true} offset={-100} duration={700} onClick={toggleMenu}>Conference</Link></li>
        <li><Link to="cfp" smooth={true} offset={-100} duration={700} onClick={toggleMenu}>Call For Papers</Link></li>
        <li><Link to="pub" smooth={true} offset={-100} duration={700} onClick={toggleMenu}>Publications</Link></li>
        <li><Link to="reg" smooth={true} offset={-100} duration={700} onClick={toggleMenu}>Registrations</Link></li>
        <li><Link to="committee" smooth={true} offset={-100} duration={700} onClick={toggleMenu}>Committee</Link></li>
        <li><Link to="contact" smooth={true} offset={-100} duration={700} onClick={toggleMenu}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
