import "react-app-polyfill/ie9";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./redux/store/configureStore";
import "./firebase/firebase";
import "normalize.css";
import "react-dates/lib/css/_datepicker.css";
import "./styles/style.scss";
import { startSetExpenses } from "../src/redux/actions/expenses";
import {
  login,
  logout,
  clearExpenseState,
} from "../src/actions/authentication";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "typeface-roboto";
import LoadingPage from "./components/LoadingPage";

const store = configureStore();

let hasRendered = false;

const rederApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<LoadingPage />, document.getElementById("root"));

const loading = async () => {
  store.dispatch(startSetExpenses());
  return true;
};

onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    store.dispatch(login(user.uid));
    loading().then(() => {
      rederApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    store.dispatch(clearExpenseState());
    rederApp();
    history.push("/");
  }
});
