import React from 'react';

const Projects = () => (
  <div className="project-grid">
    <div className="project-grid__tile">
      <img src="http://marcheauxpuces.herokuapp.com" alt="MarcheAuxPuces" />
      <span className="project-grid__tile--name">Marché aux Puces</span>
    </div>
    <div className="project-grid__tile">
      <img src="http://daya-mern.herokuapp.com" alt="Daya" />
      <span className="project-grid__tile--name">Daya</span>
    </div>
    <div className="project-grid__tile">
      <img src="http://deanmayne.github.io/waveduck" alt="WaveDuck" />
      <span className="project-grid__tile--name">WaveDuck</span>
    </div>
  </div>
);

export default Projects;