import React from "react";

const ProfileSection = () => (
  <div className="profile">
    <img className="profile__headshot" src="./Headshot.jpg" alt="headshot" />
    <p className="profile__bio">
      Hi I'm Dean ! I am a newly minted Software Engineer who spent a lot of
      time in my past life in working in the fashion industry. Now I'm on the
      hunt for a backend or full-stack job ! Technologies and skills I have in
      my toolbelt include Javascript, Ruby on Rails, React/Redux, the MERN
      Stack, R, and many others you can find on my{" "}
      <a href="http://www.github.com/deanmayne">Github</a>, along with my past
      and current projects !
    </p>
  </div>
);

export default ProfileSection;
