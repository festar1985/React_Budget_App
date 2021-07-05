import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header";
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";
import ExpensesDashboard from "../components/ExpensesDashboard";
import Help from "../components/Help";
import PageNotFound from "../components/PageNotFound";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpensesDashboard} exact={true} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
