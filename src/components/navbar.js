import React from "react";
import {Link} from 'react-router-dom';
import "../stylesheets/application.scss";

const Navbar = () => (
  <div className="navbar">
    <a href="http://www.deanmayne.com">
      <h1>Dean Mayne</h1>
    </a>
    <div className="navbar__left">
      <Link to="/projects">Projects</Link>
      <a href="http://www.github.com/deanmayne">Github</a>
      <a href="http://www.angel.co/u/deanmayne">AngelList</a>
    </div>
  </div>
);

export default Navbar;
