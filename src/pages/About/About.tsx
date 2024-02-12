import React from "react";
import "./aboutStyles.css";
import { WebdevPic } from "../../assets/index";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>Abbout Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={WebdevPic} alt="my_image" className="about__me-image" />
        </div>

        <div className="about__main__con">
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>3+ years working</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Skills</h5>
                <small>3+ years working</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>3+ years working</small>
              </article>
            </div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, qui.
            Rem minima sed praesentium molestiae iure quia ad debitis porro
            expedita similique quaerat repudiandae fuga, eveniet natus corrupti
            explicabo numquam.
          </p>
          <a href="#about" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
