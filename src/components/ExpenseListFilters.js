import React from "react";
import { connect } from "react-redux";
import {
  filterText,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../redux/actions/filters";
import { useState } from "react";
import { DateRangePicker } from "react-dates";

const ExpenseListFilters = (props) => {
  const [state, setState] = useState({
    calendarFocus: null,
  });

  const onDatesChange = ({ startDate, endDate }) => {
    props.dispatch(setStartDate(startDate));
    props.dispatch(setEndDate(endDate));
  };

  const onFocusChange = (calendarFocus) => {
    setState(() => ({ calendarFocus }));
  };

  return (
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
      <DateRangePicker
        startDate={props.filters.startDate} // momentPropTypes.momentObj or null,
        endDate={props.filters.endDate} // momentPropTypes.momentObj or null,
        onDatesChange={onDatesChange} // PropTypes.func.isRequired,
        focusedInput={state.calendarFocus} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={onFocusChange} // PropTypes.func.isRequired,
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
        keepOpenOnDateSelect={true}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { filters: state.filters };
};

export default connect(mapStateToProps)(ExpenseListFilters);
