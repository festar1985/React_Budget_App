import { createStore, combineReducers } from "redux";
import expensesReducer from "../redusers/expenses";
import filtersReducer from "../redusers/filters";

const configureStore = () => {
  const store = createStore(
    combineReducers({ expenses: expensesReducer, filters: filtersReducer })
  );
  return store;
};

export default configureStore;
