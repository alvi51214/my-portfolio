import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuFunction = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false); // Reset the menu on larger screens
      }
    };

    // Attach event listener for resizing
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section>
      <nav className="nav">
        <div className="nav-center">
          <div className="nav-header">
            <h3>abdullah</h3>
            <button className="nav-btn" onClick={menuFunction}>
              <FaBars />
            </button>
          </div>
          <ul className={`nav-links ${showMenu ? "show-links" : ""}`}>
            <ScrollLink to="about" smooth={true} duration={500}>
              <li>About</li>
            </ScrollLink>
            <Link to="/projects">
              <li>Projects</li>
            </Link>
            <ScrollLink to="skills" smooth={true} duration={500}>
              <li>Skills</li>
            </ScrollLink>
            <ScrollLink to="services" smooth={true} duration={500}>
              <li>Services</li>
            </ScrollLink>
          </ul>
        </div>
      </nav>
      <header className="hero">
        <div className="hero-center">
          <div className="underline"></div>
          <h1>I'm, abdullah</h1>
          <p className="banner-info">
            I am a web developer. I can put your imagination into technology. I
            will be your creative web development partner.
          </p>
          <a
            href="https://drive.google.com/file/d/1fbOzLjPW-WhM1rFshwdGmfsvoNPJMoIL/view?usp=drive_link"
            target="_blank"
          >
            <button className="btn">Download CV</button>
          </a>
        </div>
      </header>
    </section>
  );
};

export default Header;
