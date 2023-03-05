import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from '@/modules/users';
import { userApi } from '@/modules/user';

export default configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(usersApi.middleware, userApi.middleware)
});