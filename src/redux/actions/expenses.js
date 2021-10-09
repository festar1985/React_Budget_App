import { push, onValue, remove, ref, update } from "firebase/database";
import { myDatabase, databaseReference } from "../../firebase/firebase";

//Actions

export const addExpense = (expenses) => ({
  type: "ADD_EXPENSE",
  expenses,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "Description not available",
      category = "Others",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { description, category, note, amount, createdAt };

    push(databaseReference, expense).then((reference) => {
      dispatch(
        addExpense({
          id: reference.key,
          ...expense,
        })
      );
    });
  };
};

export const removeExpense = (id = "") => ({ type: "REMOVE_EXPENSE", id });

export const startRemoveExpense = (id) => {
  return async (dispatch) => {
    await remove(ref(myDatabase, id));
    dispatch(removeExpense(id));
  };
};

export const modifyExpense = (id, updates) => ({
  type: "MODIFY_EXPENSE",
  id,
  updates,
});

export const startModifyExpense = (id, updates) => {
  return async (dispatch) => {
    await update(ref(myDatabase, id), updates);
    dispatch(modifyExpense(id, updates));
  };
};

export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch) => {
    onValue(
      databaseReference,
      (snapshot) => {
        const expenses = [];
        Object.entries(snapshot.val()).forEach(([key, val]) => {
          const expense = {
            id: key,
            ...val,
          };
          expenses.push(expense);
        });

        dispatch(setExpenses([...expenses]));
      },
      { onlyOnce: true }
    );
  };
};
