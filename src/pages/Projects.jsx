import React from "react";
import { useGlobalContext } from "../components/context";

const Projects = () => {
  const { repos } = useGlobalContext();

  return (
    <section className="section">
      <div className="section-title">
        <h2>my projects</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        <div className="project-card-container">
          {/* single project */}
          {repos.map((card) => {
            const { id, name, html_url, langugae, description } = card;
            const formattedName = name
              .replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase());
            return (
              <article key={id} className="project-card">
                <div className="card-side card-front">
                  <img
                    src="../public/download.jpeg"
                    alt="image"
                    className="project-img"
                  />
                  <div className="project-info">
                    <h3 className="project-title">{formattedName}</h3>
                    <p>{description}</p>
                  </div>
                </div>
                <div className="card-side card-back">
                  <div className="links-container">
                    <a href="#">Source Code</a>
                    <a href="#">Live Preview</a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
