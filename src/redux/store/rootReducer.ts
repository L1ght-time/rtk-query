import { combineReducers } from '@reduxjs/toolkit';

import { ToDosApi } from '../../api/ToDosApi/instance';

export const rootReducer = combineReducers({
  [ToDosApi.reducerPath]: ToDosApi.reducer,
});
