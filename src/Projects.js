import React from "react";
import "./Projects.css";
import "./Project";
import Project from "./Project";
import projects from "./Data/projectsInfo";

const Projects = (props) => {
  return (
    <div className="Projects">
      <div className="main-block">
        {projects.map((project) => {
          return <Project {...props} link={project.link} title={project.title} image={project.image} type={project.type} project={project.details} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
