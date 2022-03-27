import React from "react";
import useWindowDimensions from "./CustomHooks/useWindowDimensions";
import SlideShow from "./materialUI/SlideShow";

export default function ProjectDetails({ project }) {
  const dimensions = useWindowDimensions();
  return (
    <div
      style={{
        fontFamily: "Neucha",
        height: project.carousel ? `${dimensions.height - 80}px` : "",
        overflowY: project.carousel ? "scroll" : "",
        paddingRight: project.carousel ? "15px" : "",
      }}
    >
      <p
        style={{
          color: "rgb(51,51,51)",
          //   backgroundColor: "rgb(245,245,245)",
          padding: "0px 20px",
          fontWeight: "600",
          borderLeft: "4px solid rgb(51,51,51)",
          overflowWrap: "break-word",
        }}
      >
        {project.breif}
      </p>
      {project.API !== null && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            backgroundColor: "#333333",
            padding: "10px 20px",
            margin: "10px",
            display: "inline-block",
            textDecoration: "none",
          }}
          className="API-class"
          href={project.API}
        >
          API
        </a>
      )}

      {project.PDF && (
        <a
          style={{
            color: "white",
            backgroundColor: "#ea4335",
            padding: "10px 20px",
            margin: "10px",
            display: "inline-block",
            textDecoration: "none",
          }}
          target="_blank"
          rel="noopener noreferrer"
          href={require(`./pdfs/${project.PDF}`)}
        >
          <i className="fas fa-file-pdf" style={{ marginRight: "5px" }}></i> Report
        </a>
      )}
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
              backgroundColor: "rgb(41, 54, 71)",
              padding: "10px 20px",
              margin: "10px",
              display: "inline-block",
            }}
          >
            {tech}
          </p>
        );
      })}
      {(project?.git?.client || project?.git?.server || project?.git?.both) && (
        <h3
          style={{
            color: "rgb(51,51,51)",
          }}
        >
          <i className="fab fa-github"></i> GitHub Repositories
        </h3>
      )}
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
      {project.git.both && (
        <p
          onClick={() => {
            window.open(project.git.both);
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
          <i className="fas fa-code-branch"></i> Source Code
        </p>
      )}

      {project.carousel && (
        <div style={{ backgroundColor: "#f1f1f1", marginTop: "20px", border: "3px solid #333333" }}>
          <SlideShow images={project.carousel} />
        </div>
      )}
    </div>
  );
}
