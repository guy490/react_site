import React from "react";
import workers from "../data/staff.json";
import WorkerCard from "./WorkerCard/WorkerCard.js";
import "./TeamView.css";

const TeamView = () => {
  const NUM_OF_WORKERS = 6;

  const getRandomWorkerList = () => {
    let tmpWorkers = [...workers];
    let workerList = [];
    for (let i = 0; i < NUM_OF_WORKERS; i++) {
      const randomIndex = Math.floor(Math.random() * tmpWorkers.length);
      const randomWorker = tmpWorkers[randomIndex];
      tmpWorkers = [
        ...tmpWorkers.slice(0, randomIndex),
        ...tmpWorkers.slice(randomIndex + 1, tmpWorkers.length),
      ];
      workerList.push(randomWorker);
    }
    return workerList;
  };

  return (
    <div class="flex-container">
      {getRandomWorkerList().map((worker, idx) => (
        <WorkerCard key={idx} worker={worker} />
      ))}
    </div>
  );
};

export default TeamView;
