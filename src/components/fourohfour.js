import React, { useEffect } from "react";
import logAmplitudeEvent from "../App";

const FourOhFour = () => {
  useEffect(() => {
    logAmplitudeEvent("404page:page:load");
  }, []);

  return (
    <div className="fourohfour">
      <h1>
        <p>Currently under construction !</p>
        <p>
          But please feel free to checkout my{" "}
          <a
            href="http://www.github.com/deanmayne"
            onClick={() => logAmplitudeEvent("404page:githublink:click")}
          >
            Github
          </a>{" "}
          for my past and current projects !
        </p>
      </h1>
    </div>
  );
};

export default FourOhFour;
