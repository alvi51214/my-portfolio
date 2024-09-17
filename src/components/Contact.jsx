import React from "react";
import { useState } from "react";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <section id="contact">
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

export default Contact;
