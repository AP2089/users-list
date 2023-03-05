import React, { useEffect } from 'react';
import ButtonBase from '@/ui/ButtonBase';
import '@/ui/Modal/_modal';

const Modal = ({isShow, children, onChange}) => {
  const onClose = () => {
    onChange(false);
  }

  useEffect(() => {
    if (isShow) {
      document.body.classList.add('body-fixed');
    } else {
      document.body.classList.remove('body-fixed');
    }
  }, [isShow]);

  return (
    <>
      {isShow &&
        <div className='modal'>
          <div className='modal__core'>
            <ButtonBase className='modal__close'onClick={onClose}>Close</ButtonBase>
            {children}
          </div>
        </div>
      }
    </>
  )
}

export default React.memo(Modal);