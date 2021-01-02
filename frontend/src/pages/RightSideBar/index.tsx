import classnames from 'classnames';
import React from 'react';

import { Paper, Typography, Avatar, IconButton } from '@material-ui/core';
import Topics from '../../components/Topics';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import SearchTextField from '../../components/SearchTextField';
import useHomeStyles from '../Home/useHomeStyles';
import Users from '../../components/Users';

const RightSideBar = () => {
  const s = useHomeStyles();

  return (
    <>
      <SearchTextField />
      <Topics />
      <Users />
    </>
  );
};

export default RightSideBar;
