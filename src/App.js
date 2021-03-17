import React from "react";
import "./App.css";
import "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/hello" component={Home} />

        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Redirect to="/hello" />
      </Switch>
    </div>
  );
}

export default App;
