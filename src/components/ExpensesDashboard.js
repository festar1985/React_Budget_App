import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpensesDashboard = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList></ExpenseList>
  </div>
);

export default ExpensesDashboard;
