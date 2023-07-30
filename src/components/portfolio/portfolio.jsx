import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/CLOUDIMAGE.jpg";
import Img2 from "../../assets/taskimage.jpg";
import Img3 from "../../assets/formovie.png";
import Img4 from "../../assets/otp-verificationIMG.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container protfolio__container">
      
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img1} alt="cloud" />
          </div>
          <h3>Cloud Cover</h3>
          <div className="portfolio__item-image">
          <a href="https://github.com/Bhavya-Verma07/CloudCover" className="btn">
            github repo
          </a>
          <a
            href="https://bhavya-verma07.github.io/CloudCover/"
            className="btn btn-primary"
            target="_blank"
          >
            Live demo
          </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img2} alt="cloud" />
          </div>
          <h3>Task Keeper App</h3>
          <div className="portfolio__item-image">
          <a href="https://github.com/Bhavya-Verma07/TaskKeeperBackend" className="btn">
            github repo
          </a>
          <a
            href="https://task-keeper-app.onrender.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live demo
          </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img4} alt="cloud" />
          </div>
          <h3>Authentication App</h3>
          <div className="portfolio__item-image">
          <a href="https://github.com/Bhavya-Verma07/AuthenticateUser" className="btn">
            github repo
          </a>
          <a
            href="https://authenticate-user.onrender.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live demo
          </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img3} alt="cloud" />
          </div>
          <h3>Movie API App</h3>
          <div className="portfolio__item-image">
          <a href="https://github.com/Bhavya-Verma07/movieAPI" className="btn">
            github repo
          </a>
          <a
            href="https://itsmovieapiapp.netlify.app/"
            className="btn btn-primary"
            target="_blank"
          >
            Live demo
          </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
