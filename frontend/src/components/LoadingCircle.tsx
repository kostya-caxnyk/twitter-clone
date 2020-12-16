import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import useHomeStyles from '../pages/Home/useHomeStyles';

const LoadingCircle = () => {
  const s = useHomeStyles();

  return (
    <div className={s.loading}>
      <CircularProgress />
    </div>
  );
};

export default LoadingCircle;
