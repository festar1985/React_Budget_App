import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/style.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./redux/store/configureStore";
import { addExpense } from "./redux/actions/expenses";

const store = configureStore();

store.dispatch(addExpense({ description: "Rent", amount: 100 }));

store.dispatch(
  addExpense({ description: "Gass Bill", amount: 800, createdAt: 100 })
);

store.dispatch(
  addExpense({
    description: "Water Bill",
    amount: 2800,
    note: "imalo edno vreme",
  })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
