import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@/ui/Modal';

const UsersAlbums = ({ albums = [], user = {}, isShow = false, onChange = () => {} }) => {
  return (
    <Modal
      isShow={isShow}
      onChange={onChange}
    >
      <h4 className='users__modal-title'>{user.name}</h4>
      
      <div className='users__modal-list'>
        {albums.map(album => (
          <div
            key={album.id}
            className='users__modal-item'
          >
            {album.title}
          </div>
        ))}
      </div>
    </Modal>
  )
}

UsersAlbums.propTypes = {
  albums: PropTypes.array,
  user: PropTypes.object,
  onChange: PropTypes.func,
  isShow: PropTypes.bool,
}

export default React.memo(UsersAlbums);