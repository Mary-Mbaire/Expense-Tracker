import React from 'react';
import AddExpense from './AddExpense';
import ExpenseList from './ExpenseList';
import TotalExpense from './TotalExpense';
import './styles.css';

const App = () => {
    return (
      <div className="container">
        <h1>Expense Tracker</h1>
        <AddExpense />
        <ExpenseList />
        <TotalExpense />
      </div>
    );
  };
  
  export default App;