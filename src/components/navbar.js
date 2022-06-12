import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/application.scss";
import logAmplitudeEvent from "../App";

const Navbar = () => (
  <div className="navbar">
    <Link to="/" onClick={() => logAmplitudeEvent("navbar:homepagelink:click")}>
      <h1>Dean Mayne</h1>
    </Link>
    <div className="navbar__right">
      <Link
        to="/resume"
        onClick={() => logAmplitudeEvent("navbar:resumepagelink:click")}
      >
        Resume
      </Link>
      <Link
        to="/projects"
        onClick={() => logAmplitudeEvent("navbar:projectspagelink:click")}
      >
        Projects
      </Link>
      <a
        href="http://www.github.com/deanmayne"
        target="_blank"
        onClick={() => logAmplitudeEvent("navbar:githublink:click")}
      >
        Github
      </a>
      <a
        href="http://www.linkedin.com/in/deanmayne"
        target="_blank"
        onClick={() => logAmplitudeEvent("navbar:linkedinlink:click")}
      >
        LinkedIn
      </a>
      <a
        href="http://www.angel.co/u/deanmayne"
        target="_blank"
        onClick={() => logAmplitudeEvent("navbar:angellistlink:click")}
      >
        AngelList
      </a>
    </div>
  </div>
);

export default Navbar;
