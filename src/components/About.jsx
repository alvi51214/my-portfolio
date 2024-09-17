import React, { useState } from "react";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
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
          passion for coding drives me to stay at the forefront of technological
          advancements, ensuring that I build products that are not only
          functional but also intuitive and visually appealing. I prioritize the
          principles of UI/UX to create seamless user experiences, always aiming
          for complete client satisfaction. Let’s collaborate and bring your
          vision to life.
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
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={toggleModal}>
              X
            </button>
            <h2>Contact Us</h2>
            <div className="underline"></div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              action="/thankyou"
            >
              <input type="hidden" name="form-name" value="contact" />

              <input
                type="text"
                id="name"
                className="form-control"
                name="name"
                placeholder="Name"
                required
              />

              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                required
                placeholder="Email"
              />

              <input
                type="text"
                id="text"
                name="text"
                className="form-control"
                required
                placeholder="Subject"
              />

              <textarea
                id="message"
                name="message"
                className="form-control"
                required
                placeholder="Message"
              ></textarea>

              <button className="submit-btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
