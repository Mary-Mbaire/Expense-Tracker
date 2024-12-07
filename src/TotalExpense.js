import React from 'react';
import { useSelector } from 'react-redux';

const TotalExpense = () => {
  const total = useSelector((state) => state.expenses.total);

  return (
    <div className='total-expense'>
      <h3>Total Expense</h3>
      <p>Ksh {total}</p>
    </div>
  );
};

export default TotalExpense;