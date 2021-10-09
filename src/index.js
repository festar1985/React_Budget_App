import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./redux/store/configureStore";
import "./firebase/firebase";
import "normalize.css";
import "react-dates/lib/css/_datepicker.css";
import "./styles/style.scss";
import { startSetExpenses } from "../src/redux/actions/expenses";
const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

const loading = async () => {
  store.dispatch(startSetExpenses());
  return true;
};

loading().then(() => {
  ReactDOM.render(jsx, document.getElementById("root"));
});
