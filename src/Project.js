import React from "react";
import SimpleModal from "./materialUI/SimpleModal";
import SimplePopper from "./materialUI/SimplePopper";
import "./Project.css";
import ProjectDetails from "./ProjectDetails";

const Project = (props) => {
  const stylesForTheButton = { cursor: "pointer", position: "absolute", bottom: "7px", border: "none", backgroundColor: "transparent", color: "white", borderRadius: "50%", fontSize: "1.3rem" };
  return (
    <div className="Project">
      <img src={props.image} alt="broken"></img>
      <p>{props.title}</p>
      <div className="project-type-class">
        <h4>{props.type}</h4>
      </div>

      {props.link && (
        <SimplePopper
          popperText="Visit"
          buttonStyles={{ ...stylesForTheButton, left: "10px" }}
          onClick={() => {
            window.open(props.link);
          }}
        >
          <i className="fas fa-globe"></i>
        </SimplePopper>
      )}
      <SimpleModal buttonContent={<i className="fas fa-info-circle"></i>} popperText="Details" buttonStyles={{ ...stylesForTheButton, right: "10px" }}>
        <ProjectDetails project={props.project} />
      </SimpleModal>
    </div>
  );
};

export default Project;
