import React from "react";
import "./Projects.css";
import "./Project";
import Project from "./Project";
import projects from "./Data/projectsInfo";

const Projects = (props) => {
  return (
    <div className="Projects">
      <div className="main-block">
        <Project {...props} link="https://createandshare.netlify.app/" title="Create and Share" image={require("./images/cands.png")} project={projects[0]} />

        <Project {...props} link="https://izihandmade.web.app/" title="IzI Handmade" image={require("./images/izi.png")} project={projects[1]} />
        <Project {...props} title="Spotify Clone" image={require("./images/spotify.png")} project={projects[2]} />
        {/* link="https://github.com/FatemaFawzy/Frontend-Team" */}
      </div>
    </div>
  );
};

export default Projects;
