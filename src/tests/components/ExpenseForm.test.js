import React from "react";
import ExpensesForm from "../../components/ExpenseForm";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { expenses } from "../fixture/expenses";

Enzyme.configure({ adapter: new Adapter() });

test("should render expense form correctly", () => {
  const wrapper = shallow(<ExpensesForm />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render expense form correctly with inputed data", () => {
  const wrapper = shallow(<ExpensesForm expense={expenses[1]} />);

  expect(toJSON(wrapper)).toMatchSnapshot();
});

// test("should render error for invalid data submission", () => {
//   const setState = jest.fn();
//   const useStateSpy = jest.spyOn(React, "useState");
//   useStateSpy.mockImplementation((initialState) => [initialState, setState]);
//   const wrapper = shallow(<ExpensesForm />);
//   wrapper.find("form").simulate("submit", setState());
//   expect(setState).toHaveBeenCalled();
// });

test("should call on submit props for valid form submision", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpensesForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt,
    calendarFocused: false,
  });
});
