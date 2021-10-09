import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../redux/actions/expenses";

export const AddExpense = (props) => (
  <div>
    <h1>Add an expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        //props.dispatch(addExpense(expense));
        props.onSubmit(expense);
        props.history.push("/");
      }}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (expense) => dispatch(startAddExpense(expense)),
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpense);
