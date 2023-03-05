import React from 'react';
import ButtonBase from '@/ui/ButtonBase';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../stores/userApi';
import Loader from '@/ui/Loader';
import Message from '@/ui/Message';
import '../styles/_user';

const User = () => {
  const { id } = useParams();
  const {data, isLoading, error} = useGetUserQuery(id);

  return (
    <div className='user'>
      {isLoading && <Loader />}
      
      {error &&
        <Message
          type='error'
          message={error}
        />
      }

      <div className='user__head'>
        <h2 className='user__heading'>{data?.user.name}</h2>
        <ButtonBase to="/" className='user__back'>Back &raquo;</ButtonBase>
      </div>

      <div className='user__posts'>
        {data?.posts.map(post => (
          <div
            className='user__posts-item'
            key={post.id}
          >
            <h4 className='user__posts-title'>{post.title}</h4>
            <div className='user__posts-body'>{post.body}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default React.memo(User);