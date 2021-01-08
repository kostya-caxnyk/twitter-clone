import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Button, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import BackButton from '../../components/BackButton';
import useHomeStyles from '../HomePage/useHomeStyles';
import { selectUserData } from '../../store/ducks/user/selectors';
import { useParams } from 'react-router-dom';
import { User } from '../../store/ducks/user/contracts/state';
import LoadingCircle from '../../components/LoadingCircle';
import RoomIcon from '@material-ui/icons/RoomOutlined';
import DateRangeIcon from '@material-ui/icons/DateRangeOutlined';
import { formatMonthAndYear } from '../../utils/formatDate';

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
        <div>
          <Typography
            variant="h6"
            className={s.feedHeaderLabel}
            style={{ padding: 0, paddingTop: 5 }}>
            {user.name}
          </Typography>
          <Typography
            variant="subtitle2"
            className={s.feedHeaderLabel}
            style={{ padding: 0, paddingBottom: 5, fontWeight: 400 }}>
            {user.tweets.length} твитов
          </Typography>
        </div>
      </Paper>
      <div className={s.profileBackground} />
      <div className={s.profileBlock}>
        <div className={s.profileMeta}>
          <div className={s.profileAvatar}>
            <img src={user.avatarUrl} alt={user.name} />
          </div>
          <Button variant="outlined" color="primary">
            Изменить профиль
          </Button>
        </div>
        <div className={s.profileInfo}>
          <div style={{ marginBottom: 10 }}>
            <Typography variant="h6" style={{ fontSize: 19, fontWeight: 800 }}>
              {user.name}
            </Typography>
            <Typography variant="subtitle1" className={s.profileLabel}>
              @{user.username}
            </Typography>
          </div>
          {!!user.about && <Typography className={s.profileAbout}>{user.about}</Typography>}
          <div className={s.profileDetails}>
            {!!user.location && (
              <Typography className={s.profileLabel}>
                <RoomIcon />
                {user.location}
              </Typography>
            )}
            <Typography className={s.profileLabel}>
              <DateRangeIcon />
              Регистрация: {formatMonthAndYear(user.createdAt)}
            </Typography>
          </div>
          <div style={{ marginBottom: 10, fontSize: 15 }}>
            <span className={s.profileLink}>
              <b>{user.inSubscribers.length}</b> в читаемых
            </span>
            <span className={s.profileLink}>
              <b>{user.subscribers.length}</b> читателей
            </span>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default ProfilePage;
