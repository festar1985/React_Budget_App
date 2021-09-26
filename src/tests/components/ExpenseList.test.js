import React from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { expenses } from "../fixture/expenses";

Enzyme.configure({ adapter: new Adapter() });

test("should render ExpenseList with expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render ExpenseList with empty expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
