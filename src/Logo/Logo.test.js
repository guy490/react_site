import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Logo from "./Logo";

Enzyme.configure({ adapter: new Adapter() });

describe("<Logo />", () => {
  it("contains the correct text", () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.text()).toEqual("Fintek.co.il");
  });
});
