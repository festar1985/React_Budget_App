import React from "react";
import { AddExpense } from "../../components/AddExpense";
import { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

test("should test rendering add expense correctly", () => {
  const onSubmit = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(<AddExpense onSubmit={onSubmit} history={history} />);
  expect(wrapper).toMatchInlineSnapshot(`ShallowWrapper {}`);
});
