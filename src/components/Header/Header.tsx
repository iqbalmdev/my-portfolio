import React from "react";
import "./headerStyles.css";
import CTA from "./CTA";
import WebdevPic from "../../assets/kevin-ku-aiyBwbrWWlo-unsplash.jpg";
import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h5>Iqbal</h5>
        <h5 className="text-light">Full stack developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">iqbal</div>
        <a href="#content" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
