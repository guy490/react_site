import React from "react";
import "./AboutText.css";

const AboutText = ({ header, children }) => {
  return (
    <section>
      <div className="abouttext-container">
        <h3 className="sub-header">{header}</h3>
        <p>{children}</p>
      </div>
    </section>
  );
};

export default AboutText;
