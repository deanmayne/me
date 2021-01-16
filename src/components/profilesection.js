import React from "react";

const ProfileSection = () => (
  <div className="profile">
    <img className="profile__headshot" src="./Headshot.jpg" alt="headshot" />
    <p className="profile__bio">
      Hi I'm <span>Dean</span> ! I am a newly minted{" "}
      <span>Software Engineer</span> who spent a lot of time in my past life in
      working in the fashion industry. Now I'm on the hunt for a backend or
      full-stack job ! Technologies and skills I have in my toolbelt include{" "}
      <span>Javascript</span>, <span>Ruby on Rails</span>,{" "}
      <span>React/Redux</span>, the <span>MERN</span> Stack, <span>R</span>, and
      many others you can find on my{" "}
      <a href="http://www.linkedin.com/in/deanmayne">LinkedIn</a> or{" "}
      <a href="http://www.github.com/deanmayne">Github</a>, along with my past
      and current projects !
    </p>
  </div>
);

export default ProfileSection;
