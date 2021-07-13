import React from "react";
import { removeExpense } from "../redux/actions/expenses";
import { connect } from "react-redux";

const ExpensesListItem = ({
  dispatch,
  id,
  description,
  category,
  amount,
  createdAt,
}) => (
  <div>
    <h3>{description}</h3>
    <p>{category}</p>
    <p>{amount}</p>
    <p>{createdAt}</p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

export default connect()(ExpensesListItem);
