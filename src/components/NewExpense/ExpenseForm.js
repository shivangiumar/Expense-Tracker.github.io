import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredtitle, setEnteredTitle] = useState("");
  const [enteredamount, setEnteredAmount] = useState("");
  const [entereddate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler=(event)=>{
    event.preventDefault();//page will not load
    const expenseData={
        title:enteredtitle,
        amount:enteredamount,
        date:new Date(entereddate)
    }
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');//two way binding
    setEnteredAmount('');
    setEnteredDate('');
    console.log(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className=".new-expense_controls">
        <div className=".new-expense_control">
          <label>Title</label>
          <input type="text" value={enteredtitle} onChange={titleChangeHandler} />
        </div>
        <div className=".new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredamount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className=".new-expense_control">
          <label>Date</label>
          <input type="date"  value={entereddate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
