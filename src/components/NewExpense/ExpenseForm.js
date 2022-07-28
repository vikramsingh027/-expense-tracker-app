import React, { useState } from "react";
import "./ExpenseForm.css";
export const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   title: e.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, title: e.target.value };
    // });
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: e.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, amount: e.target.value };
    // });
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, date: e.target.value };
    // });
  };

  const sumbitChangeHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    if (title === "" || amount === "" || date === "") {
      alert("Some fields are empty!!!");
    } else {
      props.onSaveExpenseData(expenseData);
      setTitle("");
      setAmount("");
      setDate("");
    }
  };
  return (
    <form onSubmit={sumbitChangeHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
