import React from 'react';
import { useSelector } from 'react-redux';

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  return (
    <div>
      <h3>Expense List</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index} className="expense-item">
            <span className="expense-name">{expense.name}</span>
            <span className="expense-amount">Ksh {expense.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;