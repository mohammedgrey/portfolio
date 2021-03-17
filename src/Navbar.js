import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="navbar"
      //   style={{
      //     backgroundImage: "url(" + background + ")",
      //   }}
    >
      <div className="nav-link">
        <NavLink to="/hello">What I do</NavLink>
      </div>
      <div className="nav-link">
        <NavLink to="/projects">Projects</NavLink>
      </div>
      <div className="nav-link">
        <NavLink to="/contact"> Contact me</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
