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
    <div className="page-header">
      <div className="content-container">
        {props.expenses.length === 0 ? (
          <div></div>
        ) : (
          <h1 className="page-header__title">
            {props.expenses.length === 1 ? (
              <div>
                Viewing 1 expense in total = €
                <span className="page-variable">{totalAmount}</span>
              </div>
            ) : (
              <div>
                Viewing{" "}
                <span className="page-variable">{props.expenses.length}</span>{" "}
                expenses in total ={" "}
                <span className="page-variable">€{totalAmount}</span>
              </div>
            )}
          </h1>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
