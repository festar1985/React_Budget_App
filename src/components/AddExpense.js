import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../redux/actions/expenses";

export const AddExpense = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1>Add an expense</h1>
      </div>
    </div>

    <ExpenseForm
      onSubmit={(expense) => {
        props.onSubmit(expense);
        props.history.push("/dashboard");
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
