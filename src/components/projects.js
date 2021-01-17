import React from "react";

const Projects = () => (
  <div className="project-grid">
    <div className="project-grid__tile">
      <a
        className="project-grid__tile--left"
        href="http://marcheauxpuces.herokuapp.com"
      >
        <img
          className="project-grid__tile--left--image"
          src="../../images/marcheauxpuces.png"
          alt="MarcheAuxPuces"
        />
        <span className="project-grid__tile--left--name">Marché aux Puces</span>{" "}
      </a>
      <span className="project-grid__tile--description">
        <p>
          A full-stack clone of the popular e-commerce site Etsy employing a
          Ruby on Rails backend, Javascript, and React/Redux frontend.
        </p>
      </span>
    </div>
    <div className="project-grid__tile">
      <span className="project-grid__tile--description">
        <p>
          A more social take on the tradtional calendar built using the MERN
          stack.
        </p>
      </span>
      <a
        className="project-grid__tile--left"
        href="http://daya-mern.herokuapp.com"
      >
        <img
          className="project-grid__tile--left--image"
          src="../../images/daya.jpg"
          alt="DAYA"
        />
        <span className="project-grid__tile--left--name">DAYA</span>
      </a>
    </div>
    <div className="project-grid__tile">
      <a
        className="project-grid__tile--left"
        href="http://deanmayne.github.io/waveduck"
      >
        <img
          className="project-grid__tile--left--image"
          src="../../images/waveduck.png"
          alt="MarcheAuxPuces"
        />
        <span className="project-grid__tile--left--name">WaveDuck</span>
      </a>
      <span className="project-grid__tile--description">
        <p>
          A digital rendition of the classic "wave box" featuring themed ducks.{" "}
        </p>
      </span>
    </div>
  </div>
);

export default Projects;
