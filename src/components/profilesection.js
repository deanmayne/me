import React from "react";
import { Link } from "react-router-dom";

const ProfileSection = () => (
  <div className="profile">
    <img className="profile__headshot" src="./Headshot.jpg" alt="headshot" />
    <div className="profile__bio">
      <p className="profile__bio--text">
        Hi I'm <span>Dean</span> !{" "}
      </p>
      <p className="profile__bio--text">
        I am a <span>Software Engineer</span> who spent a lot of time in my past
        life working in the fashion industry. Now I work at a telemedicine
        company,{" "}
        <a style={{ color: "palevioletred" }} href="http://helloalpha.com">
          Alpha Medical
        </a>
        , as a <span>Full Stack Software Engineer</span> !
      </p>{" "}
      <p className="profile__bio--text">
        Technologies and skills I have in my toolbelt include{" "}
        <span>Javascript</span>, <span>Python and Flask</span>,{" "}
        <span>React/Redux</span>, <span>HTML/CSS</span>, the{" "}
        <span> MERN Stack</span>, <span>R</span>, and many others you can find
        on my <a href="http://www.linkedin.com/in/deanmayne">LinkedIn</a> or{" "}
        <a href="http://www.github.com/deanmayne">Github</a>, along with my past
        and current <Link to="/projects">projects</Link> !
      </p>
      <p className="profile__bio--text">
        Ask me about my{" "}
        <a href="http://reclaimfoundation.org">non-profit work !</a>
      </p>
    </div>
  </div>
);

export default ProfileSection;
