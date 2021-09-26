import React from "react";
import PageNotFound from "../../components/PageNotFound";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

test("should render Page Not Found", () => {
  const wrapper = shallow(<PageNotFound />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
