import React, { useEffect } from "react";
import { logAmplitudeEvent } from "../App";

const Resume = () => {
  useEffect(() => {
    logAmplitudeEvent("resumepage:page:load");
  }, []);
  return (
    <div className="resume">
      <embed
        className="resume__content"
        src="Dean_Mayne_Resume.pdf"
        width="800px"
        height="1100px"
      />
      <a
        href="./Dean_Mayne_Resume.pdf"
        className="resume__button"
        onClick={() => logAmplitudeEvent("resumepage:resume:download")}
      >
        Download
      </a>
    </div>
  );
};

export default Resume;
