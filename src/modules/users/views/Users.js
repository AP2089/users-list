import React from 'react';
import UsersItem from './UsersItem';
import Loader from '@/ui/Loader';
import Message from '@/ui/Message';
import { useGetUsersQuery } from '../stores/usersApi';
import '../styles/_users';

const Users = () => {
  const {data: users, isLoading, error} = useGetUsersQuery();

  return (
    <div className='users'>
      {isLoading && <Loader />}
      
      {error &&
        <Message
          type='error'
          message={error}
        />
      }

      {users?.map(user => (
        <UsersItem
          key={user.id}
          user={user}
        />
      ))}
    </div>
  )
}

export default React.memo(Users);