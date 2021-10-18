import React from "react";
import { connect } from "react-redux";
import ExpensesListItem from "./ExpenseListItem";
import getVisibleExpenses from "../redux/selectors/expenses";

export const ExpenseList = (props) => (
  <div className="content-container ">
    <div className="list-header">
      <div className="show-on-mobile">Expenses</div>
      <div className="show-on-desktop">Expense</div>
      <div className="show-on-desktop">Category</div>
      <div className="show-on-desktop">Amount</div>
    </div>
    {props.expenses.length === 0 ? (
      <div className="list-item lits-item__message">
        <span>There are no expenses to show</span>
      </div>
    ) : (
      props.expenses.map((element) => {
        return <ExpensesListItem key={element.id} {...element} />;
      })
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
