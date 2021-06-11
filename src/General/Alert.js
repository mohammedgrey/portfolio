import React from "react";
import "./Alert.css";
const Alert = (props) => {
  return (
    <div style={{ display: props.visible ? "block" : "none" }} className={`center-alert animate__animated animate__fadeInDown`}>
      <p>{props.message}</p>
    </div>
  );
};

export default Alert;
