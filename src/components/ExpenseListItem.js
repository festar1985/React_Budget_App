import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import numeral from "numeral";

const ExpensesListItem = ({ id, description, category, amount, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="lits-item__title">{description}</h3>
      <span>{moment(createdAt).format("DD.MMM.YYYY")}</span>
    </div>
    <div className="lits-item__category">
      <h3>{category}</h3>
    </div>
    <div className="lits-item__amount">
      <h3>€{numeral(amount / 100).format("0,0.00")}</h3>
    </div>
  </Link>
);

export default ExpensesListItem;
