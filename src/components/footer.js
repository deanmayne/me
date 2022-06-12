import React from "react";
import "../stylesheets/application.scss";
import logAmplitudeEvent from "../App";

const Footer = () => {
  return (
    <footer>
      <a
        href="mailto:deancmayne@gmail.com"
        onClick={() => logAmplitudeEvent("footer:emaillink:click")}
      >
        <i className="fas fa-envelope"></i>
      </a>
      <a
        href="https://github.com/deanmayne/"
        onClick={() => logAmplitudeEvent("footer:githublink:click")}
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/deanmayne/"
        onClick={() => logAmplitudeEvent("footer:linkedinlink:click")}
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="https://www.angel.co/u/deanmayne"
        onClick={() => logAmplitudeEvent("footer:angelistlink:click")}
      >
        <i className="fab fa-angellist"></i>
      </a>
    </footer>
  );
};

export default Footer;
