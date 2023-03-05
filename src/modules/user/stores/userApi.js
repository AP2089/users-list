import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/config';

const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (build) => ({
    getUser: build.query({
      async queryFn(id, _queryApi, _extraOptions, fetchWithBQ) {
        const responseUser = await fetchWithBQ(`/users/${id}`);

        if (responseUser.error) {
          return {
            error: responseUser.error
          }
        }

        const responseUserPosts = await fetchWithBQ(`/posts?userId=${id}`);

        if (responseUserPosts.error) {
          return {
            error: responseUserPosts.error
          }
        }

        return {
          data: {
            user: responseUser.data,
            posts: responseUserPosts.data
          }
        }
      }
    })
  })
});

export const { useGetUserQuery } = userApi;
export default userApi;