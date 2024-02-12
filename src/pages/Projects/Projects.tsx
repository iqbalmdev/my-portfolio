import React from "react";
import "./projectsStyles.css";
import ProjectImage from "../../assets/project pic.jpg";
const Projects = () => {
  return (
    <section id="projects">
      <h5>What I am doing </h5>
      <h2>Projects</h2>
      <div className="container projects__container">
        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={ProjectImage} />
          </div>
          <h3>This is project title</h3>
          <div className="portfolio__item__cta">
            <a href="gooogle.com" className="btn" target="_blank">
              {" "}
              Github
            </a>
            <a href="gooogle.com" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={ProjectImage} />
          </div>
          <h3>This is project title</h3>
          <div className="portfolio__item__cta">
            <a href="gooogle.com" className="btn" target="_blank">
              {" "}
              Github
            </a>
            <a href="gooogle.com" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={ProjectImage} />
          </div>
          <h3>This is project title</h3>
          <div className="portfolio__item__cta">
            <a href="gooogle.com" className="btn" target="_blank">
              {" "}
              Github
            </a>
            <a href="gooogle.com" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={ProjectImage} />
          </div>
          <h3>This is project title</h3>
          <div className="portfolio__item__cta">
            <a href="gooogle.com" className="btn" target="_blank">
              {" "}
              Github
            </a>
            <a href="gooogle.com" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
