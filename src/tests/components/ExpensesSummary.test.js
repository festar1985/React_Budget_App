import React from "react";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { expenses } from "../fixture/expenses";

Enzyme.configure({ adapter: new Adapter() });

const expenseOne = [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 30,
    createdAt: 12345,
  },
];

test("should render without and expense", () => {
  const wrapper = shallow(<ExpensesSummary expenses={[]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render with 1 expense", () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenseOne} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render with multiple expenses", () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
