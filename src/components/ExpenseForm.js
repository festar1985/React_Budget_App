import React from "react";
import { useState } from "react";

const ExpenseForm = () => {
  const [state, setState] = useState({ description: "", note: "" });
  const [amountState, setAmountState] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={state.description}
          onChange={(e) =>
            setState({ description: e.target.value, note: state.note })
          }
        ></input>
        <input
          type="number"
          placeholder="Amount"
          value={amountState}
          onChange={(e) => {
            let num = Number(e.target.value).toFixed(0);
            setAmountState(num);
          }}
        ></input>
        <textarea
          placeholder="Add a note (optional)"
          value={state.note}
          onChange={(e) =>
            setState({ description: state.description, note: e.target.value })
          }
        ></textarea>
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
