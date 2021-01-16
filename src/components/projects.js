import React from "react";

const Projects = () => (
  <div className="project-grid">
    <a
      className="project-grid__tile"
      href="http://marcheauxpuces.herokuapp.com"
      className="project-grid__tile--name"
    >
      <img src="../../images/marcheauxpuces.png" alt="MarcheAuxPuces" />
      Marché aux Puces
    </a>
    <a
      className="project-grid__tile"
      href="http://daya-mern.herokuapp.com"
      className="project-grid__tile--name"
    >
      <img src="../../images/daya.jpg" alt="Daya" />
      DAYA
    </a>
    <a
      className="project-grid__tile"
      href="http://deanmayne.github.io/waveduck"
      className="project-grid__tile--name"
    >
      <img src="../../images/waveduck.png" alt="WaveDuck" />
      WaveDuck
    </a>
  </div>
);

export default Projects;
