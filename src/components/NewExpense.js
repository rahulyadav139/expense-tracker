import React, { useState } from 'react';
import styles from './NewExpense.module.css';
import Button from './UI/Button';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {
  const [addExpense, setAddExpense] = useState(true);
  const addHandler = e => {
    setAddExpense(false);
  };

  const cancelHandler = e => {
    setAddExpense(true);
  };

  return (
    <div className={styles.form}>
      {!addExpense && (
        <ExpenseForm
          onSave={props.onSave}
          onCancel={cancelHandler}
          onAdd={addHandler}
        />
      )}
      {addExpense && (
        <Button onClick={addHandler} className="add">
          Add Expense
        </Button>
      )}
    </div>
  );
};
export default NewExpense;
