import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLazyGetAlbumsQuery } from '../stores/usersApi';
import UsersAlbums from './UsersAlbums';
import ButtonBase from '@/ui/ButtonBase';
import Loader from '@/ui/Loader';

const UsersItem = ({ user = {} }) => {
  const [getAlbums, { data: albums, isLoading }] = useLazyGetAlbumsQuery();
  const [isModalShow, setIsModalShow] = useState(false);

  const albumsShow = async () => {
    await getAlbums(user.id);
    setIsModalShow(true);
  }

  return (
    <div className='users__item'>
      {isLoading && <Loader />}

      <div className='users__wrap'>
        <div className='users__name'>
          {user.name}
        </div>

        <div className='users__tools'>
          <ButtonBase to={`/users/${user.id}`} className='users__btn'>
            Posts
          </ButtonBase>

          <ButtonBase
            className='users__btn'
            onClick={albumsShow}
          >
            Albums
          </ButtonBase>
        </div>
      </div>

      <UsersAlbums
        user={user}
        albums={albums}
        isShow={isModalShow}
        onChange={setIsModalShow}
      />
    </div>
  )
}

UsersItem.propTypes = {
  user: PropTypes.object
}

export default React.memo(UsersItem);