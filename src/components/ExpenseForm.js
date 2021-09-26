import "react-dates/initialize";
import React from "react";
import { useState } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

const ExpenseForm = (props) => {
  const [state, setState] = useState({
    description: props.expense ? props.expense.description : "",
    note: props.expense ? props.expense.note : "",
    amount: props.expense ? (props.expense.amount / 100).toString() : "",
    calendarFocused: false,
  });

  const [dateState, setDateState] = useState({
    createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
  });

  const [errorState, setErrorState] = useState({
    error: false,
  });

  const onDateChange = (date) =>
    date ? setDateState({ createdAt: date }) : dateState.createdAt;

  const onFocusChange = ({ focused }) => {
    setState({
      ...state,
      calendarFocused: focused,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!state.description || !state.amount) {
      setErrorState({ error: true });
    } else {
      setErrorState({ error: false });
      props.onSubmit({
        ...state,
        amount: parseFloat(state.amount, 10) * 100,
        createdAt: dateState.createdAt.valueOf(),
      });
    }
  };

  return (
    <div>
      {errorState.error && <p>Please fill both description and ammound</p>}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={state.description}
          onChange={(e) =>
            setState({
              ...state,
              description: e.target.value,
            })
          }
        ></input>
        <input
          type="text"
          placeholder="Amount"
          value={state.amount}
          onChange={(e) => {
            let amount = e.target.value;

            if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/gm)) {
              setState({
                ...state,
                amount: amount,
              });
            }
          }}
        ></input>
        <SingleDatePicker
          date={dateState.createdAt}
          onDateChange={onDateChange}
          focused={state.calendarFocused}
          onFocusChange={onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Add a note (optional)"
          value={state.note}
          onChange={(e) =>
            setState({
              ...state,
              note: e.target.value,
            })
          }
        ></textarea>
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
