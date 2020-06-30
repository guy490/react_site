import React from "react";
import workers from "../data/staff.json";
import WorkerCard from "./WorkerCard/WorkerCard.js";
import "./TeamView.css";

const getRandomWorkerList = (workers) => {
  const numberOfWorkers = 6;
  let tmpWorkers = [...workers];
  let workerList = [];
  for (let i = 0; i < numberOfWorkers; i++) {
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

const TeamView = () => {
  return (
    <div class="flex-container">
      {getRandomWorkerList(workers).map((worker, idx) => (
        <WorkerCard key={idx} worker={worker} />
      ))}
    </div>
  );
};

export { getRandomWorkerList };

export default TeamView;
