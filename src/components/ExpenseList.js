import React from "react";
import { connect } from "react-redux";
import ExpensesListItem from "./ExpenseListItem";
import getVisibleExpenses from "../redux/selectors/expenses";

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <p>There are no expenses to show</p>
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
