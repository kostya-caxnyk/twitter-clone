import React from 'react';

import Topics from '../../components/Topics';
import SearchTextField from '../../components/SearchTextField';
import Users from '../../components/Users';

const RightSideBar = () => {
  return (
    <div style={{ position: 'sticky', top: 0 }}>
      <SearchTextField />
      <Topics />
      <Users />
    </div>
  );
};

export default RightSideBar;
