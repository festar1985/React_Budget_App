import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";
import ExpensesDashboard from "../components/ExpensesDashboard";
import Help from "../components/Help";
import PageNotFound from "../components/PageNotFound";
import LoggingPage from "../components/LoggingPage";
import { createBrowserHistory } from "history";
import PrivatRoute from "./PrivatRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoggingPage} exact={true} />
        <PrivatRoute path="/dashboard" component={ExpensesDashboard} />
        <PrivatRoute path="/create" component={AddExpense} />
        <PrivatRoute path="/edit/:id" component={EditExpense} />
        <PrivatRoute path="/help" component={Help} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
