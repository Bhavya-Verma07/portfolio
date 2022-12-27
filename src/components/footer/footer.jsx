import React from "react";
import './footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Bhavya Verma
      </a>
      <ul className="parmalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://m.facebook.com/100007015121068/">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/priya_verma_710/">
          <FaInstagram />
        </a>
        <a href="https://mobile.twitter.com/BhavyaV23872030">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Bhavya Verma's Porfile. All rIghts reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
