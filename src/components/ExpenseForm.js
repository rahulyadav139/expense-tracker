import styles from './ExpenseForm.module.css';
import React, { useState } from 'react';
import Button from './UI/Button';

import Modal from './UI/Modal';

import { Fragment } from 'react';

const ExpenseForm = props => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const titleChangeHandler = e => {
    setTitle(e.target.value);
  };
  const amountChangeHandler = e => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = e => {
    setDate(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (!title || !amount || !date)
      return setError('Empty fields are not allowed!');
    if (+amount < 0) return setError('Amount must be a positive number!');

    const newExpense = {
      id: `e-${Math.floor(Math.random() * 9) + 1}`,

      title: title,
      amount: Number(amount).toFixed(2),
      date: new Date(date),
    };

    props.onSave(newExpense);
    setTitle('');
    setAmount('');
    setDate('');
    props.onCancel();
  };
  const hideModal = () => {
    setError('');
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <input value={title} onChange={titleChangeHandler} type="text" />
        <label>Amount</label>
        <input
          value={amount}
          onChange={amountChangeHandler}
          type="number"
          step="0.01"
        />
        <label>Date</label>
        <input value={date} onChange={dateChangeHandler} type="date" />
        <div className={styles.buttons}>
          <Button onClick={props.onCancel}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
      {error && <Modal onHide={hideModal} msg={error} />}
    </Fragment>
  );
};
export default ExpenseForm;
