import React from "react";
import { useGlobalContext } from "../components/context";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectImages = {
    "Github Users Search": "/Github Users Search.png",
    "React Search Photos": "/React Search Photos.png",
    "React Quiz App": "/React Quiz App.png",
  };
  const livePreview = {
    "Github Users Search": "https://searchusersfromgithub.netlify.app",
    "React Quiz App": "https://react-quizess.netlify.app",
    "React Search Photos": "https://react-search-pictures.netlify.app",
  };

  const { repos, loading } = useGlobalContext();
  // Define the project to exclude
  const projectToExclude = "my-portfolio";

  // Filter out the project
  const filteredRepos = repos.filter((repo) => repo.name !== projectToExclude);
  console.log(filteredRepos);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="back-home-container">
        <Link to="/" className="btn">
          Back To Home
        </Link>
      </div>
      <section className="projects-section">
        <div className="section-title">
          <h2>my projects</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center">
          <div className="project-card-container">
            {filteredRepos.map((card) => {
              const { id, name, html_url, language, description } = card;
              const formattedName = name
                .replace(/-/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase());

              const imageSrc = projectImages[formattedName] || "/default.jpg";
              const liveSrc = livePreview[formattedName];
              return (
                <article key={id} className="project-card">
                  <div className="card-side card-front">
                    <img src={imageSrc} className="project-img" />
                    <div className="project-info">
                      <h3 className="project-title">{formattedName}</h3>
                      <p>
                        {description ? description : "No description available"}
                      </p>
                    </div>
                  </div>
                  <div className="card-side card-back">
                    <div className="links-container">
                      <a href={html_url} target="_blank">
                        Source Code
                      </a>
                      <a href={liveSrc} target="_blank">
                        Live Preview
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
