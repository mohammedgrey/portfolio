import React from "react";
import "./Projects.css";
import "./Contact.css";
import "./Project";
import Project from "./Project";
import projects from "./Data/projectsInfo";
import otherProjects from "./Data/otherProjects";

const Projects = (props) => {
  return (
    <div className="Projects">
      <h1 style={{ minWidth: "250px", margin: 0 }} className="headerText">
        Web Projects
      </h1>
      <div className="main-block">
        {projects.map((project) => {
          return (
            <Project
              {...props}
              link={project.link}
              title={project.title}
              image={project.image}
              type={project.type}
              project={project.details}
            />
          );
        })}
      </div>
      <h1 style={{ minWidth: "250px", margin: 0, marginTop: "20px" }} className="headerText">
        Other Projects
      </h1>
      <div className="main-block">
        {otherProjects.map((project) => {
          return (
            <Project
              {...props}
              link={project.link}
              title={project.title}
              image={project.image}
              type={project.type}
              project={project.details}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
