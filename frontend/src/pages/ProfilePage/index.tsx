import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import BackButton from '../../components/BackButton';
import useHomeStyles from '../HomePage/useHomeStyles';
import { selectUserData } from '../../store/ducks/user/selectors';
import { useParams } from 'react-router-dom';
import { User } from '../../store/ducks/user/contracts/state';
import LoadingCircle from '../../components/LoadingCircle';

const ProfilePage = () => {
  const s = useHomeStyles();
  const currentUser = useSelector(selectUserData);
  const params = useParams<{ username: string }>();
  const [user, setUser] = React.useState<User | null>(null);

  useEffect(() => {
    if (currentUser?.username === params.username) {
      setUser(currentUser);
    }
  }, [currentUser, params]);

  if (!user) {
    return <LoadingCircle />;
  }

  return (
    <Paper variant="outlined" className={s.feedWrapper} square>
      <Paper variant="outlined" className={s.feedHeader}>
        <BackButton />
        <Typography variant="h6" className={s.feedHeaderLabel}>
          {user.name}
        </Typography>
      </Paper>
    </Paper>
  );
};

export default ProfilePage;
