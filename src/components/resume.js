import React from "react";

const Resume = () => (
  <div className="resume">
    <embed
      className="resume__content"
      src="Dean_Mayne_Resume.pdf"
      width="800px"
      height="1100px"
    />
    <a href="./Dean_Mayne_Resume.pdf" className="resume__button">
      Download
    </a>
  </div>
);

export default Resume;
