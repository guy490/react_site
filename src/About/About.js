import React from "react";
import AboutText from "./AboutText/AboutText";
import "./About.css";

const About = () => {
  return (
    <div className="content">
      <h1 className="header">Execution is everything</h1>
      <AboutText header={"WHO ARE WE"}>
        We are a team of creatively diverse, driven, and innovative individuals
        working to acheive the best we can
      </AboutText>
      <AboutText header={"OUR MISSION"}>
        We want to give our clients the best and help their businesses succeed.
        Together we can make you inspire to grouth to even more than where you
        are today.
      </AboutText>
    </div>
  );
};

export default About;
