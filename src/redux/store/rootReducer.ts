import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from '../reducers/counterReducer/counterSlice';

export const rootReducer = combineReducers({ counterReducer });
