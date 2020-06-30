import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Logo from "../Logo/Logo";
import About from "../About/About";
import TeamView from "../TeamView/TeamView";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders Logo children Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Logo />)).toEqual(true);
  });
  it("renders About children Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<About />)).toEqual(true);
  });
  it("renders TeamView children Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<TeamView />)).toEqual(true);
  });
});
