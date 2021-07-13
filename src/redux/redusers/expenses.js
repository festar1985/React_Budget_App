const expenseReducerDefaultState = [];

const expensesReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expenses];
    case "REMOVE_EXPENSE":
      return state.filter((element) => element.id !== action.id);
    case "MODIFY_EXPENSE":
      return state.map((expenses) => {
        if (expenses.id === action.id) {
          return {
            ...expenses,
            ...action.updates,
          };
        } else {
          return expenses;
        }
      });
    default:
      return state;
  }
};

export default expensesReducer;
