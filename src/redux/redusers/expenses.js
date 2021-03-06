const expenseReducerDefaultState = [];

const expensesReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expenses];
    case "REMOVE_EXPENSE":
      return state.filter((element) => element.id !== action.id);
    case "SET_EXPENSES":
      return state.concat(action.expenses);
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
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

export default expensesReducer;
