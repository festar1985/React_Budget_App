import React from "react";
import { connect } from "react-redux";
import { filterText, sortByDate, sortByAmount } from "../redux/actions/filters";

const ExpenseListFilters = (props) => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={(event) => {
        props.dispatch(filterText(event.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={(event) => {
        if (event.target.value === "date") {
          props.dispatch(sortByDate(event.target.value));
        } else if (event.target.value === "amount") {
          props.dispatch(sortByAmount(event.target.value));
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return { filters: state.filters };
};

export default connect(mapStateToProps)(ExpenseListFilters);
