import { configureStore, createSlice } from '@reduxjs/toolkit';

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: [],
    total: 0,
  },
  reducers: {
    addExpense(state, action) {
      state.expenses.push(action.payload);
      state.total += action.payload.amount;
    },
  },
});

export const { addExpense } = expensesSlice.actions;

const store = configureStore({
  reducer: {
    expenses: expensesSlice.reducer,
  },
});

export default store;