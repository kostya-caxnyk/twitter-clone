import React from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import useHomeStyles from '../pages/HomePage/useHomeStyles';

const SearchTextField = () => {
  const s = useHomeStyles();

  return (
    <TextField
      placeholder="Поиск в Твиттере"
      className={s.searchInput}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};

export default SearchTextField;
