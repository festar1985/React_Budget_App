import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import numeral from "numeral";

const ExpensesListItem = ({ id, description, category, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{category}</p>
    <p>{numeral(amount / 100).format("0,0.00")}</p>
    <p>{moment(createdAt).format("DD.MMM.YYYY")}</p>
  </div>
);

export default ExpensesListItem;
