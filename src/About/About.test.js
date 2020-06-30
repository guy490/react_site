import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import About from "./About";
import AboutText from "./AboutText/AboutText";

Enzyme.configure({ adapter: new Adapter() });

describe("<Logo />", () => {
  it("The header 'Execution is everything' is exist", () => {
    const wrapper = shallow(<About />);
    expect(
      wrapper.contains(<div className="header">Execution is everything</div>)
    ).toEqual(true);
  });

  it("contains 2 components of <AboutText />", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find(AboutText)).toHaveLength(2);
  });
});
