import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expensesReducer from "../redusers/expenses";
import filtersReducer from "../redusers/filters";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

const configureStore = () => {
  const store = createStore(
    combineReducers({ expenses: expensesReducer, filters: filtersReducer }),

    composeEnhancers(applyMiddleware(thunk))

    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default configureStore;
