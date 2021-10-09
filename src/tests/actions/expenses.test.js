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

test("should setup add expense with provided values", () => {
  const expenses = {
    description: "Rent",
    category: "Others",
    note: "dolar",
    amount: 100,
    createdAt: 0,
    id: "absd",
  };

  const action = addExpense(expenses);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expenses: {
      ...expenses,
      id: expect.any(String),
    },
  });
});

// test("should setup add expense with default values", () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expenses: {
//       description: "Description not available",
//       category: "Others",
//       note: "",
//       amount: 0,
//       createdAt: 0,
//     },
//   });
// });
