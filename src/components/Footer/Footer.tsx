import React from "react";
import "./footerStyles.css";
import { BsFacebook } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Iqbal
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="experience">Experience</a>
        </li>
        <li>
          <a href="projects">Projects</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <BsFacebook />
        </a>
        <a href="https://instagram.com">
          <BiLogoInstagramAlt />
        </a>
        <a href="https://twitter.com">
          <BsTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Mohammed Iqbal.All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
