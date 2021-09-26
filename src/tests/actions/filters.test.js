import {
  setStartDate,
  setEndDate,
  filterText,
  sortByAmount,
  sortByDate,
} from "../../redux/actions/filters";
import moment from "moment";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    date: moment(0),
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    date: moment(0),
  });
});

test("should generate filter set action object with value", () => {
  const filterData = "testing";
  const action = filterText(filterData);
  expect(action).toEqual({
    type: "FILTER_TEXT",
    text: "testing",
  });
});

test("should generate set filter set action object with default", () => {
  const action = filterText();
  expect(action).toEqual({
    type: "FILTER_TEXT",
    text: "",
  });
});

test("should generate sort by amount action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});

test("should generate sort by dateaction object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
  });
});
