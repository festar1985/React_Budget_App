import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import {
  startModifyExpense,
  startRemoveExpense,
} from "../redux/actions/expenses";

const EditExpense = (props) => {
  return (
    <div>
      <ExpenseForm
        modify={true}
        expense={props.expenses}
        onSubmit={(expense) => {
          props.dispatch(startModifyExpense(props.expenses.id, expense));
          props.history.push("/");
        }}
      ></ExpenseForm>

      <button
        onClick={() => {
          props.dispatch(startRemoveExpense(props.expenses.id));
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
