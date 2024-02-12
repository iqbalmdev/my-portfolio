import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https:google.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https:github" target="_blank">
        <FaGithub />
      </a>
      <a href="https:twitter" target="_blank">
        <FiTwitter />
      </a>
    </div>
  );
};

export default HeaderSocial;
