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
          Greetings,<br/>

I am Bhavya Verma, currently pursuing my B.Tech. in Electronics and Communication Engineering at Madan Mohan Malaviya University of Technology, Gorakhpur. Hailing from Ballia, Uttar Pradesh, I possess a diverse skill set, specializing in creating full-stack MERN (MongoDB, Express.js, React.js, Node.js) websites. My expertise extends to proficiently working with JavaScript, both on the frontend and backend aspects of development. Additionally, I have achieved a rating of 3 stars on HackerRank in C++ and 2 stars in the C language. Also, I have 250+ gfg problem solving score.
<br/>
Thank you for visiting my portfolio, and I look forward to sharing my professional journey and projects with you.
           
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
