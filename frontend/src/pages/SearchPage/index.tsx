import React from 'react';

import { Paper } from '@material-ui/core';
import BackButton from '../../components/BackButton';
import SearchTextField from '../../components/SearchTextField';
import useHomeStyles from '../HomePage/useHomeStyles';

const SearchPage = () => {
  const s = useHomeStyles();

  return (
    <Paper variant="outlined" className={s.feedWrapper} square>
      <Paper variant="outlined" className={s.feedHeader}>
        <BackButton />
        <SearchTextField />
      </Paper>
    </Paper>
  );
};

export default SearchPage;
