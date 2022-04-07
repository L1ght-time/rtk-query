import { createSlice } from '@reduxjs/toolkit';

/* eslint-disable no-param-reassign */

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
  },
  extraReducers: () => {},
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
