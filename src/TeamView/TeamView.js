import React from "react";
import workers from "../data/staff.json";
import WorkerCard from "./WorkerCard/WorkerCard.js";
import "./TeamView.css";

const getRandomWorkerList = (workers) => {
  const numberOfWorkers = 6;
  const workerList = [];
  for (let i = 0; i < numberOfWorkers; i++) {
    const randomIndex = Math.floor(Math.random() * workers.length);
    const randomWorker = workers[randomIndex];
    workers = [
      ...workers.slice(0, randomIndex),
      ...workers.slice(randomIndex + 1, workers.length),
    ];
    workerList.push(randomWorker);
  }
  return workerList;
};

const TeamView = () => {
  return (
    <div className="flex-container">
      {getRandomWorkerList(workers).map((worker) => (
        <WorkerCard key={worker.id} worker={worker} />
      ))}
    </div>
  );
};

export { getRandomWorkerList };

export default TeamView;
