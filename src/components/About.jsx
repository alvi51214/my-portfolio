import React, { useState } from "react";
import { useGlobalContext } from "./context";
import Contact from "./Contact";

const About = () => {
  const { toggleModal } = useGlobalContext();
  return (
    <>
      <section className="section section-center about" id="about">
        <div className="section-title">
          <h1>about</h1>
          <div className="underline"></div>
        </div>
        <div className="about-info">
          <p>
            I am Abdullah, a dedicated web developer with over two years of
            experience in creating dynamic, user-centric websites. With a BSc in
            Software Engineering from UET Taxila, Pakistan, I have successfully
            delivered high-quality digital solutions for various startups and
            global clients, consistently exceeding expectations. <br></br>My
            passion for coding drives me to stay at the forefront of
            technological advancements, ensuring that I build products that are
            not only functional but also intuitive and visually appealing. I
            prioritize the principles of UI/UX to create seamless user
            experiences, always aiming for complete client satisfaction. Let’s
            collaborate and bring your vision to life.
          </p>
          <div className="btn-container">
            <button
              type="submit"
              className="btn about-btn "
              onClick={toggleModal}
            >
              Contact me
            </button>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default About;
