import React from "react";
import "./WorkerCard.css";
const WorkerCard = ({ worker }) => {
  return (
    <div className="container">
      <img
        className="img"
        src={`${worker.avatar}?tmp=${worker.firstname}${worker.lastname}`}
        alt={`${worker.firstname} ${worker.lastname}`}
      />
      <div>
        <h3>{`${worker.firstname} ${worker.lastname}`}</h3>
        <div className="meta">{worker.job}</div>
      </div>
    </div>
  );
};

export default WorkerCard;
