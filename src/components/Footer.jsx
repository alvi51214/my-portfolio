import React from "react";
import { CiMail, CiLinkedin, CiFacebook, CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <section className="section footer">
      <div className="section-title">
        <h2>contact me</h2>
        <div className="underline"></div>
      </div>
      <div className="socials">
        <a href="mailto:sameeralvi156@gmail.com">
          <CiMail className="social-icon" />
        </a>
        <a href="https://www.facebook.com/alvi.156/">
          <CiFacebook className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/abdullah-alvee/">
          <CiLinkedin className="social-icon" />
        </a>
        <a href="https://twitter.com/abdullah_alvi5">
          <CiTwitter className="social-icon" />
        </a>
        <a href="https://github.com/alvi51214">
          <FaGithub className="social-icon" />
        </a>
      </div>

      <h4 className="footer-auth">
        developed by{" "}
        <a href="https://github.com/alvi51214">
          <span>muhammad abdullah</span>
        </a>
      </h4>
      <p className="copyright">
        &copy; {date} Muhammad Abdullah. All rights reserved{" "}
      </p>
    </section>
  );
};

export default Footer;
