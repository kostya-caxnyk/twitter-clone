import React from 'react';

import Topics from '../../components/Topics';
import SearchTextField from '../../components/SearchTextField';
import Users from '../../components/Users';

const RightSideBar = () => {
  return (
    <>
      <SearchTextField />
      <Topics />
      <Users />
    </>
  );
};

export default RightSideBar;
