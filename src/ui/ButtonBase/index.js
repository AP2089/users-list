import React from 'react';
import { Link } from 'react-router-dom';
import '@/ui/ButtonBase/buttonBase';

const ButtonBase = ({ children, className, to, ...rootDOMAttributes }) => {
  const classes = `button-base ${className}`;

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={classes}
      {...rootDOMAttributes}
    >
      {children}
    </button>
  )
}
export default React.memo(ButtonBase);