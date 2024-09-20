import React, { useState } from "react";
import { useGlobalContext } from "./context";

const Contact = () => {
  const { isModalOpen, toggleModal } = useGlobalContext();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form action
    setIsSubmitted(true); // Show Thank You modal after form submission

    // Clear form inputs
    setFormData({
      name: "",
      email: "",
      text: "",
      message: "",
    });
  };

  return (
    <div>
      {isModalOpen && !isSubmitted && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={toggleModal}>
              X
            </button>
            <h2>Contact ME</h2>
            <div className="underline"></div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              action="/thankyou"
              onSubmit={handleSubmit} // Handle form submission here
            >
              <input type="hidden" name="form-name" value="contact" />

              <input
                type="text"
                id="name"
                className="form-control"
                name="name"
                placeholder="Name"
                value={formData.name} // Controlled input
                onChange={handleChange} // Handle input change
                required
              />

              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email} // Controlled input
                onChange={handleChange} // Handle input change
                required
                placeholder="Email"
              />

              <input
                type="text"
                id="text"
                name="text"
                className="form-control"
                value={formData.text} // Controlled input
                onChange={handleChange} // Handle input change
                required
                placeholder="Subject"
              />

              <textarea
                id="message"
                name="message"
                className="form-control"
                value={formData.message} // Controlled input
                onChange={handleChange} // Handle input change
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

      {isSubmitted && (
        <div className="modal-overlay" onClick={() => setIsSubmitted(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsSubmitted(false)}>
              X
            </button>
            <h2>Thank You!</h2>
            <div className="underline"></div>
            <p>
              Your form has been successfully submitted. We will get back to you
              soon!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
