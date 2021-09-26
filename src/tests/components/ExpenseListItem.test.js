import React from "react";
import ExpensesListItem from "../../components/ExpenseListItem";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { expenses } from "../fixture/expenses";

Enzyme.configure({ adapter: new Adapter() });

test("should render an expense list item when i give an example", () => {
  const wrapper = shallow(<ExpensesListItem {...expenses[0]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
