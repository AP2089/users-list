import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/config';

const usersApi = createApi({
  reducerPath: 'usersApi',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => 'users'
    }),
    getAlbums: build.query({
      query: (id) => `albums?userId=${id}`
    }),
  })
});

export const { useGetUsersQuery, useLazyGetAlbumsQuery } = usersApi;
export default usersApi;
