import React from "react";
import "./about.css";
import ME from "../..//assets/IMG_20220608_154439_Bokeh.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6 months of Learning</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ projects</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Companies</h5>
              <small>Not worked yet</small>
            </article>
          </div>
          <p>
            My name is BHAVYA VERMA. Currently, I am persuing my B.tech. in Electronics and Communication Engnieering from MMMUT, Gorakhpur. I'm from Ballia, Uttar Pradesh.
            My skills include making a fullstack website in MERN. I have fine idea about Javascript.
            I can work on both on FRONTEND as well as BACKEND. 
            I have 3 stars on HackerRank in C++, and 2 stars in C language.
           
          </p>
          <a href="#contact" className="btn-btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
