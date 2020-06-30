import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TeamView, { getRandomWorkerList } from "./TeamView";
import workers from "../data/staff.json";
import WorkerCard from "./WorkerCard/WorkerCard";

Enzyme.configure({ adapter: new Adapter() });

describe("<TeamView />", () => {
  it("contains 6 components of <WorkerCard />", () => {
    const wrapper = shallow(<TeamView />);
    expect(wrapper.find(WorkerCard)).toHaveLength(6);
  });
  it("getRandomWorkerList function test", () => {
    expect(getRandomWorkerList(workers)).toHaveLength(6);
  });
});
