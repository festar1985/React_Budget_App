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
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">
            <div>Modify an expense</div>
          </h1>
        </div>
      </div>
      <ExpenseForm
        modify={true}
        expense={props.expenses}
        onSubmit={(expense) => {
          props.dispatch(startModifyExpense(props.expenses.id, expense));
          props.history.push("/dashboard");
        }}
      ></ExpenseForm>

      <div className="content-container">
        <button
          className="form-button"
          onClick={() => {
            props.dispatch(startRemoveExpense(props.expenses.id));
            props.history.push("/dashboard");
          }}
        >
          Remove Expense
        </button>
      </div>
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
