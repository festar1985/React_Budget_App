import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const demoState = {
  expenses: [
    {
      id: "abcdefgh",
      description: "January Rent",
      category: "food",
      amount: 55000,
      createdAt: "0",
      note: "Alabala",
    },
  ],
  filters: {
    text: "abc",
    sortBy: "date",
    startDate: "undefiled",
    endDate: "undefiled",
  },
};

//expenses Reduser

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

//filters Reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: "undefiled",
  endDate: "undefiled",
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "FILTER_TEXT":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_AMOUT":
      return { ...state, sortBy: "amount" };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SET_START_DATE":
      return { ...state, startDate: action.date };
    case "SET_END_DATE":
      return { ...state, endDate: action.date };
    default:
      return state;
  }
};

//Store Creation

const store = createStore(
  combineReducers({ expenses: expensesReducer, filters: filtersReducer })
);

//Actions

const addExpense = ({
  description = "Description not available",
  category = "Others",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expenses: {
    id: uuid(),
    description,
    category,
    amount,
    createdAt,
  },
});

const removeExpense = ({ id } = {}) => ({ type: "REMOVE_EXPENSE", id });

const modifyExpense = (id, updates) => ({
  type: "MODIFY_EXPENSE",
  id,
  updates,
});

const filterText = (text = "") => ({ type: "FILTER_TEXT", text });

const sortByAmout = () => ({ type: "SORT_BY_AMOUT" });
const sortByDate = () => ({ type: "SORT_BY_DATE" });

const setStartDate = (date) => ({ type: "SET_START_DATE", date });
const setEndDate = (date) => ({ type: "SET_END_DATE", date });

//get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((element) => {
      const startDateMatch =
        typeof startDate != "number" || element.createAt >= startDate;
      const endDateMatch =
        typeof startDate != "number" || element.createAt <= endDate;
      const textMatch = element.description
        .toLowerCase()
        .includes(text.toLowrCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createAt < b.createAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffe", amount: 300 })
);

store.dispatch(removeExpense({ id: expenseOne.expenses.id }));

store.dispatch(modifyExpense(expenseTwo.expenses.id, { amount: 500 }));

store.dispatch(filterText("rent"));

store.dispatch(sortByAmout());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setEndDate(225));
