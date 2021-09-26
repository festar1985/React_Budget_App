import getVisibleExpenses from "../../redux/selectors/expenses";
import moment from "moment";
import { expenses } from "../fixture/expenses";

test("should filter by text value", () => {
  const filter = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filter);

  expect(result).toEqual([expenses[2], expenses[1]]);
});

test("should filter by start date", () => {
  const filter = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filter);

  expect(result).toEqual([expenses[2], expenses[0]]);
});

test("should filter by end date", () => {
  const filter = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(24560000),
  };
  const result = getVisibleExpenses(expenses, filter);

  expect(result).toEqual([expenses[0], expenses[1]]);
});

test("should filter by sort date", () => {
  const filter = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filter);

  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("should filter by sort amount", () => {
  const filter = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filter);

  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});
