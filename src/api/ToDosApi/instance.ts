import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { ITodo } from './types';

export const ToDosApi = createApi({
  reducerPath: 'toDosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (build) => ({
    getToDo: build.query<ITodo[], number>({
      query: (limit = 5) => ({
        url: `/todos`,
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});
