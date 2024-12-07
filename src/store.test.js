import { addExpense } from './store';
import expensesReducer from './store';

describe('expensesReducer', () => {
  it('should add an expense', () => {
    const initialState = { expenses: [], total: 0 };
    const action = addExpense({ name: 'Coffee', amount: 300 });
    const result = expensesReducer(initialState, action);
    expect(result.expenses.length).toBe(1);
    expect(result.total).toBe(300);
  });
});