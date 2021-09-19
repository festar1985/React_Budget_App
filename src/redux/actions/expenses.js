import { v4 as uuid } from "uuid";

//Actions

export const addExpense = ({
  description = "Description not available",
  category = "Others",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expenses: {
    id: uuid(),
    description,
    category,
    note,
    amount,
    createdAt,
  },
});

export const removeExpense = (id = "") => ({ type: "REMOVE_EXPENSE", id });

export const modifyExpense = (id, updates) => ({
  type: "MODIFY_EXPENSE",
  id,
  updates,
});
