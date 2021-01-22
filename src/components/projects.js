import React from "react";

const PROJECTS = [
  {
    title: "Marché aux Puces",
    url: "http://marcheauxpuces.herokuapp.com",
    description:
      "A full-stack clone of the popular e-commerce site Etsy employing a Ruby on Rails backend, Javascript, and React/Redux frontend.",
    img_url: "../../images/marcheauxpuces.png",
  },

  {
    title: "DAYA",
    url: "http://daya-mern.herokuapp.com",
    description:
      "A more social take on the tradtional calendar built using the MERN stack.",
    img_url: "../../images/daya.jpg",
  },
  {
    title: "WaveDuck",
    url: "http://deanmayne.github.io/waveduck",
    description:
      'A digital rendition of the classic "wave box" featuring themed ducks.',
    img_url: "../../images/waveduck.png",
  },
];

const Projects = () => (
  <div className="project-grid">
    {PROJECTS.map((project) => (
      <div className="project-grid__tile">
        <a className='project-grid__tile--image' href={project.url}>
          <img src={project.img_url} alt={project.title} />
        </a>
        <div className="project-grid__tile--text">
          <a href={project.url}>
            <h2>{project.title}</h2>
          </a>
          <p>{project.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Projects;
