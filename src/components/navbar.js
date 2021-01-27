import React from "react";
import {Link} from 'react-router-dom';
import "../stylesheets/application.scss";

const Navbar = () => (
  <div className="navbar">
    <Link to="/">
      <h1>Dean Mayne</h1>
    </Link>
    <div className="navbar__left">
      <Link to="/resume">Resume</Link>
      <Link to="/projects">Projects</Link>
      <a href="http://www.github.com/deanmayne" target="_blank">
        Github
      </a>
      <a href="http://www.linkedin.com/in/deanmayne" target="_blank">
        LinkedIn
      </a>
      <a href="http://www.angel.co/u/deanmayne" target="_blank">
        AngelList
      </a>
    </div>
  </div>
);

export default Navbar;
