import React from 'react';
import { useSelector } from 'react-redux';

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  return (
    <div>
      <h3>Expense List</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.name}: Ksh {expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;