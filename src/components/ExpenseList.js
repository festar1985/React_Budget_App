import React from "react";
import { connect } from "react-redux";
import ExpensesListItem from "./ExpenseListItem";
import getVisibleExpenses from "../redux/selectors/expenses";

const ExpenseList = (props) => (
  <div>
    <h1>This is the Expense List</h1>
    {props.expenses.map((element) => {
      return <ExpensesListItem key={element.id} {...element} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
