import React from "react";
import "./FindMe.css";
import {
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";

function FindMe() {
  return (
    <div className="link-container">
      <p className="link-txt">Find me online.</p>
      <div className="links">
        <a
          href="https://wa.me/2348097202463"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://twitter.com/@fw_nu3l"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com/in/emmanuel-enujeko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Jomiemma"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://facebook.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  );
}

export default FindMe;
