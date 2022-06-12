import React, { useEffect } from "react";
import { logAmplitudeEvent } from "../App";
import Technologies from "./technologies";
import * as _ from "lodash";

const PROJECTS = [
  {
    title: "Reclaim Foundation Portal",
    url: "https://www.reclaimfoundation.org/reclaim-foundation-portal",
    description:
      "React + React Context application based on Figma designs for a newly founded non-profit.",
    img_url: "../../images/comingsoon.jpg",
  },
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

const Projects = () => {
  useEffect(() => {
    logAmplitudeEvent("projects:page:load");
  }, []);
  return (
    <React.Fragment>
      <div className="project-grid">
        {PROJECTS.map((project) => (
          <div className="project-grid__tile">
            <a
              className="project-grid__tile--image"
              href={project.url}
              target="_blank"
              onClick={() =>
                logAmplitudeEvent(
                  `projects:${_.camelCase(project.title)}link:click`
                )
              }
            >
              <img src={project.img_url} alt={project.title} />
            </a>
            <div className="project-grid__tile--text">
              <a
                href={project.url}
                target="_blank"
                onClick={() =>
                  logAmplitudeEvent(
                    `projects:${_.camelCase(project.title)}link:click`
                  )
                }
              >
                <h2>{project.title}</h2>
              </a>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Technologies />
    </React.Fragment>
  );
};

export default Projects;
