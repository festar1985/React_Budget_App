export const getExpensesTotal = (expenses = []) =>
  expenses
    .map((expense) => expense.amount)
    .reduce((total, expense) => total + expense, 0);
