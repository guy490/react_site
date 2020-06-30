import React from "react";
import "./AboutText.css";

const AboutText = ({ header, children }) => {
  return (
    <div className="abouttext-container">
      <div className="sub-header">{header}</div>
      <div>{children}</div>
    </div>
  );
};

export default AboutText;
