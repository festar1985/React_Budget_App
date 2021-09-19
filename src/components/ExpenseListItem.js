import React from "react";

import { Link } from "react-router-dom";

const ExpensesListItem = ({ id, description, category, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{category}</p>
    <p>{amount}</p>
    <p>{createdAt}</p>
  </div>
);

export default ExpensesListItem;
