import filtersReducer from "../../redux/redusers/filters";
import moment from "moment";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sortby to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortby to date", () => {
  const curentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const state = filtersReducer(curentState, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const state = filtersReducer(undefined, {
    type: "FILTER_TEXT",
    text: "Filtering",
  });
  expect(state.text).toBe("Filtering");
});

test("should set start date", () => {
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    date: "123456789",
  });
  expect(state.startDate).toBe("123456789");
});

test("should set end date", () => {
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    date: "123456789",
  });
  expect(state.endDate).toBe("123456789");
});
