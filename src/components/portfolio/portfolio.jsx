import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/CLOUDIMAGE.jpg";
import Img2 from "../../assets/taskimage.jpg";
import Img3 from "../../assets/formovie.png";

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
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-image">
          <a href="https://github.com" className="btn">
            github repo
          </a>
          <a
            href="https://github.com"
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
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-image">
          <a href="https://github.com" className="btn">
            github repo
          </a>
          <a
            href="https://github.com"
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
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-image">
          <a href="https://github.com" className="btn">
            github repo
          </a>
          <a
            href="https://github.com"
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
