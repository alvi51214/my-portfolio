import React from "react";
import { FaLaptop } from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="section-title">
        <h1>services</h1>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        <div className="card-container">
          <article className="card">
            <FaLaptop className="card-icon" />
            <h4>web app development</h4>
            <div className="underline"></div>
            <p>
              I will develop web applications tailored to meet your business
              requirements, leveraging the latest technologies to create
              user-friendly and efficient solutions.
            </p>
          </article>
          <article className="card">
            <MdOutlineDeveloperMode className="card-icon" />
            <h4>web customization</h4>
            <div className="underline"></div>
            <p>
              I will update your website with a modern design, add new features,
              and ensure full responsiveness by utilizing the latest tools and
              technologies.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
