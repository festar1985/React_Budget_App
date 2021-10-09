import React from "react";
import { getExpensesTotal } from "../redux/selectors/expenses-total";
import getVisibleExpenses from "../redux/selectors/expenses";
import { connect } from "react-redux";
import numeral from "numeral";

export const ExpensesSummary = (props) => {
  const totalAmount = numeral(getExpensesTotal(props.expenses) / 100).format(
    "0,0.00"
  );

  return (
    <div>
      {props.expenses.length === 0 ? (
        <div></div>
      ) : (
        <h1>
          {props.expenses.length === 1
            ? `Viewing 1 expense in total = ${totalAmount} `
            : `Viewing ${props.expenses.length} expenses in total = ${totalAmount} `}
        </h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
