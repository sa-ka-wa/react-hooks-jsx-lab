import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        I am a full-stack web developer with a passion for creating dynamic and
        responsive web applications. I enjoy working with the latest
        technologies and continuously learning new skills to improve my craft.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
