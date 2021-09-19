import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { modifyExpense, removeExpense } from "../redux/actions/expenses";

const EditExpense = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expenses}
        onSubmit={(expense) => {
          props.dispatch(modifyExpense(props.expenses.id, expense));
          props.history.push("/");
        }}
      ></ExpenseForm>

      <button
        onClick={() => {
          props.dispatch(removeExpense(props.expenses.id));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(EditExpense);
