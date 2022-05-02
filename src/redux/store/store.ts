import { configureStore } from '@reduxjs/toolkit';

import { ToDosApi } from '../../api/ToDosApi/instance';

import { rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ToDosApi.middleware),
});
