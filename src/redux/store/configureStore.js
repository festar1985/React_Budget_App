import { createStore, combineReducers } from "redux";
import expensesReducer from "../redusers/expenses";
import filtersReducer from "../redusers/filters";

const configureStore = () => {
  const store = createStore(
    combineReducers({ expenses: expensesReducer, filters: filtersReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default configureStore;
