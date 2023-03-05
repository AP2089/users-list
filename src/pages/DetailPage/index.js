import React from 'react';
import LayoutDefault from '@/layouts/LayoutDefault';
import { User } from '@/modules/user';

const DetailPage = () => {
  return (
    <LayoutDefault>
      <User />
    </LayoutDefault>
  );
}

export default React.memo(DetailPage);