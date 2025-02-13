/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li><Link to="hero" smooth={true} offset={-100} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} offset={-100} duration={500}>About</Link></li>
        <li><Link to="dates" smooth={true} offset={-100} duration={500}>Conference</Link></li>
        <li><Link to="cfp" smooth={true} offset={-100} duration={500}>Call For Papers</Link></li>
        <li><Link to="pub" smooth={true} offset={-100} duration={500}>Publications</Link></li>
        <li><Link to="reg" smooth={true} offset={-100} duration={500}>Registrations</Link></li>
        <li><Link to="committee" smooth={true} offset={-100} duration={500}>Committee</Link></li>
        <li><Link to="contact" smooth={true} offset={-100} duration={500}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
