import React from "react";
import Logo from "../Logo/Logo";
import About from "../About/About";
import TeamView from "../TeamView/TeamView";
import "./App.css";

const App = () => {
  return (
    <div className="grid-container">
      <div className="logo-item">
        <Logo />
      </div>
      <div className="about-item">
        <About />
      </div>
      <div className="teamview-item">
        <TeamView />
      </div>
    </div>
  );
};

export default App;
