import {
  addExpense,
  modifyExpense,
  removeExpense,
} from "../../redux/actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense("123asd");
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123asd",
  });
});

test("should setup edit expense action object", () => {
  const action = modifyExpense("123qwe", {
    createdAt: 123456,
    note: "alabala",
  });
  expect(action).toEqual({
    type: "MODIFY_EXPENSE",
    id: "123qwe",
    updates: { createdAt: 123456, note: "alabala" },
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    category: "Others",
    note: "dolar",
    amount: 100,
    createdAt: 0,
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expenses: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should setup add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expenses: {
      description: "Description not available",
      category: "Others",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});
