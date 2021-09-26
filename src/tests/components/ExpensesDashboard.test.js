import React from "react";
import ExpensesDashboard from "../../components/ExpensesDashboard";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

test("should render an expense list item when i give an example", () => {
  const wrapper = shallow(<ExpensesDashboard />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
