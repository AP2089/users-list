import React from 'react';
import LayoutDefault from '@/layouts/LayoutDefault';
import { Users } from '@/modules/users';

const HomePage = () => {
  return (
    <LayoutDefault>
      <Users />
    </LayoutDefault>
  );
}

export default React.memo(HomePage);