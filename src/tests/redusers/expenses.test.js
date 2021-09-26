import expensesReducer from "../../redux/redusers/expenses";
import moment from "moment";
import { expenses } from "../fixture/expenses";

test("should test with default data", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = { type: "REMOVE_EXPENSE", id: expenses[0].id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1], expenses[2]]);
});

test("should not remove expense by id if not found id", () => {
  const action = { type: "REMOVE_EXPENSE", id: 55 };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test("should add an expense", () => {
  const newExpense = {
    id: "4",
    description: "Tennis",
    note: "",
    amount: 50,
    createdAt: moment(0).valueOf(),
  };
  const action = { type: "ADD_EXPENSE", expenses: newExpense };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, newExpense]);
});

test("should edit an expense", () => {
  const action = {
    type: "MODIFY_EXPENSE",
    id: expenses[1].id,
    updates: { description: "Ski" },
  };
  const state = expensesReducer(expenses, action);

  expect(state[1].description).toBe("Ski");
});

test("should not edit an expense if expense not found", () => {
  const action = {
    type: "MODIFY_EXPENSE",
    id: 14,
    updates: { description: "Ski" },
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});
