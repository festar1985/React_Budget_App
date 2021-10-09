import { getExpensesTotal } from "../../redux/selectors/expenses-total";
import { expenses } from "../fixture/expenses";

test("should return 0 if no expenses", () => {
  const totalAmount = getExpensesTotal();
  expect(totalAmount).toEqual(0);
});

test("should return result if only one expense is provided", () => {
  const totalAmount = getExpensesTotal([expenses[0]]);
  expect(totalAmount).toEqual(expenses[0].amount);
});

test("should return result if multiple expense are provided", () => {
  const totalAmount = getExpensesTotal(expenses);
  expect(totalAmount).toEqual(
    expenses[0].amount + expenses[1].amount + expenses[2].amount
  );
});
