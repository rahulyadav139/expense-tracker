import './App.css';
import ExpenseItem from './components/ExpenseItem';
import React, { useState } from 'react';
import NewExpense from './components/NewExpense';
import ExpenseFilter from './components/ExpenseFilter';

const expenses = [
  {
    id: 'e-1',
    date: new Date(2020, 5, 21),
    title: 'Movie',
    amount: 49.99,
  },
  {
    id: 'e-2',
    date: new Date(2021, 5, 11),
    title: 'Rent',
    amount: 149.99,
  },
  {
    id: 'e-3',
    date: new Date(2019, 6, 4),
    title: 'Dinner',
    amount: 99.99,
  },
  {
    id: 'e-4',
    date: new Date(2020, 7, 10),
    title: 'Shopping',
    amount: 449.99,
  },
  {
    id: 'e-5',
    date: new Date(2019, 3, 1),
    title: 'Stationary',
    amount: 20.99,
  },
];

function App() {
  const [expenseData, setExpenseData] = useState(expenses);
  const [year, setYear] = useState('year');

  const addExpenseHandler = data => {
    setExpenseData(prevData => [data, ...prevData]);
  };

  const changeFilterHandler = year => {
    setYear(year);
  };

  const filteredData =
    year === 'year'
      ? expenseData
      : expenseData.filter(el => el.date.getFullYear().toString() === year);
  return (
    <div className="App">
      <NewExpense onSave={addExpenseHandler} />
      <ExpenseFilter selectedYear={year} onYear={changeFilterHandler} />
      {filteredData.map(el => (
        <ExpenseItem key={el.id} data={el} />
      ))}
    </div>
  );
}

export default App;
