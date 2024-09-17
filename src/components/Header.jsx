import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";
const Header = () => {
  return (
    <section>
      <Navbar />
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
