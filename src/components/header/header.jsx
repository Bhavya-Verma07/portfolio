import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../..//assets/IMG_20220608_154439_Bokeh.jpg";
import Headersocial from "./headersocial";

const Header = () => {
  return (
    <header id="#home">
      <div className="container header__container">
        <h5 style={{ padding: "10px" }}>Hey There! I am </h5>
        <h1>Bhavya Verma</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <Headersocial />
        <div>
          <img className="me" src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
