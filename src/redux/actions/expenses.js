import { push, onValue, remove, ref, update, child } from "firebase/database";
import { myDatabase, databaseReference } from "../../firebase/firebase";

export const addExpense = (expenses) => ({
  type: "ADD_EXPENSE",
  expenses,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const userUid = getState().auth.uid;
    const {
      description = "Description not available",
      category = "Others",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { description, category, note, amount, createdAt };

    push(child(databaseReference, `users/${userUid}`), expense).then(
      (reference) => {
        dispatch(
          addExpense({
            id: reference.key,
            ...expense,
          })
        );
      }
    );
  };
};

export const removeExpense = (id = "") => ({ type: "REMOVE_EXPENSE", id });

export const startRemoveExpense = (id) => {
  return async (dispatch, getState) => {
    const userUid = getState().auth.uid;
    await remove(ref(myDatabase, `users/${userUid}/${id}`));
    dispatch(removeExpense(id));
  };
};

export const modifyExpense = (id, updates) => ({
  type: "MODIFY_EXPENSE",
  id,
  updates,
});

export const startModifyExpense = (id, updates) => {
  return async (dispatch, getState) => {
    const userUid = getState().auth.uid;
    await update(ref(myDatabase, `users/${userUid}/${id}`), updates);
    dispatch(modifyExpense(id, updates));
  };
};

export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const userUid = getState().auth.uid;

    onValue(
      child(databaseReference, `users/${userUid}`),
      (snapshot) => {
        const expenses = [];
        const snapshotValue = snapshot.val() ? snapshot.val() : [];
        Object.entries(snapshotValue).forEach(([key, val]) => {
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
