import React from "react";

export default function ProjectDetails({ project }) {
  return (
    <div style={{ fontFamily: "Neucha" }}>
      <p
        style={{
          color: "rgb(51,51,51)",
          //   backgroundColor: "rgb(245,245,245)",
          padding: "0px 20px",
          fontWeight: "600",
          borderLeft: "4px solid rgb(51,51,51)",
        }}
      >
        {project.breif}
      </p>
      <h3
        style={{
          color: "rgb(51,51,51)",
        }}
      >
        <i className="fas fa-cogs"></i> Technologies
      </h3>
      {project.techs.map((tech) => {
        return (
          <p
            key={tech}
            style={{
              color: "white",
              backgroundColor: "rgb(41,54,71)",
              padding: "10px 20px",
              margin: "10px",
              display: "inline-block",
            }}
          >
            {tech}
          </p>
        );
      })}

      <h3
        style={{
          color: "rgb(51,51,51)",
        }}
      >
        <i className="fab fa-github"></i> GitHub Repositories
      </h3>
      {project.git.client && (
        <p
          onClick={() => {
            window.open(project.git.client);
          }}
          style={{
            color: "white",
            backgroundColor: "rgb(51,51,51)",
            padding: "10px 20px",
            margin: "10px",
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          <i className="fas fa-code-branch"></i> Client
        </p>
      )}
      {project.git.server && (
        <p
          onClick={() => {
            window.open(project.git.server);
          }}
          style={{
            color: "white",
            backgroundColor: "rgb(51,51,51)",
            padding: "10px 20px",
            margin: "10px",
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          <i className="fas fa-code-branch"></i> Server
        </p>
      )}
    </div>
  );
}
