import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./SocialMedia.css"; // Import your CSS file for styling

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://github.com/Adityaphadke270599"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
    >
      <BsGithub className="icon" />
      <span className="visually-hidden">GitHub</span>
    </a>
    <a
      href="https://www.linkedin.com/in/aditya-phadke-bangalore/"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
    >
      <BsLinkedin className="icon" />
      <span className="visually-hidden">LinkedIn</span>
    </a>
  </div>
);

export default SocialMedia;
