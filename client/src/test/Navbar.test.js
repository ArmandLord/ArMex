import React from "react";
import { Link } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { NavLinks, NavLogo } from "../components/Navbar/Navbar.styled";

configure({ adapter: new Adapter() });

  describe("<NavLinks />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavLinks />);
  });

  it("Deberia estar conformado por un <Link />", () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });

});

  describe("<NavLogo />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavLogo />);
  });

  it("Deberia estar conformado por un <Link />", () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });

});