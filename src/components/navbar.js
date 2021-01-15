import React from "react";
import "../stylesheets/application.scss";

const Navbar = () => (
  <div className="navbar">
    <label>Dean Mayne</label>
    <div className = "navbar__left">
      <a href="http://www.linkedin.com/in/deanmayne">LinkedIn</a>
      <a href="http://www.github.com/deanmayne">Github</a>
    </div>
  </div>
);

export default Navbar;