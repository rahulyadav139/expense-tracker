import styles from './ExpenseForm.module.css';
import React, { useState } from 'react';
import Button from './UI/Button';

import Modal from './UI/Modal';

import { Fragment } from 'react';
import { useRef } from 'react';

const ExpenseForm = props => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const amountRef = useRef();

  const titleChangeHandler = e => {
    setTitle(e.target.value);
  };
  const amountChangeHandler = e => {
    if (+e.target.value < 0) {
      setError('Negative amount value is not allowed!');
      return;
    }

    setAmount(e.target.value);
  };

  const dateChangeHandler = e => {
    setDate(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (!title || !amount || !date)
      return setError('Empty fields are not allowed!');

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
    if (error === 'Negative amount value is not allowed!')
      amountRef.current.focus();
    setError('');
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <input value={title} onChange={titleChangeHandler} type="text" />
        <label>Amount</label>
        <input
          ref={amountRef}
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
