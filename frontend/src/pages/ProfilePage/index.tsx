import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import BackButton from '../../components/BackButton';
import useHomeStyles from '../HomePage/useHomeStyles';
import { selectUserData } from '../../store/ducks/user/selectors';
import { User } from '../../store/ducks/user/contracts/state';
import LoadingCircle from '../../components/LoadingCircle';
import ProfileUserInfo from './components/ProfileUserInfo';
import TweetsFeed from '../../components/TweetsFeed';
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { userApi } from '../../services/userApi';
import Notification from '../../components/Notification';
import Tabs from './components/Tabs';
import EditProfileModal from './components/EditProfileModal';
import { selectUsersItems } from '../../store/ducks/users/selectors';

const ProfilePage = () => {
  const s = useHomeStyles();
  const username = useParams<{ username: string }>().username;
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUserData);
  const loadedUsers = useSelector(selectUsersItems);
  const tweets = useSelector(selectTweetsItems);
  const isTweetsLoading = useSelector(selectIsTweetsLoading);

  const [user, setUser] = React.useState<User | null>(null);
  const [fetchUserErrors, setFetchUserError] = React.useState(null);
  const [visibleEditModal, setVisibleEditModal] = React.useState(false);

  useEffect(() => {
    let isCanceled = false;
    let loadedUser = currentUser?.username === username ? currentUser : undefined;
    if (!loadedUser) {
      loadedUser = loadedUsers?.find((user) => user.username === username);
    }
    if (loadedUser) {
      setUser(loadedUser);
    } else {
      userApi
        .getUser(username)
        .then((user) => {
          if (!isCanceled) {
            setUser(user);
          }
        })
        .catch((error) => setFetchUserError(error.response.data.errors));
    }
    return () => {
      isCanceled = true;
    };
  }, [currentUser, loadedUsers, username, dispatch]);

  useEffect(() => {
    dispatch(fetchTweets(username));
  }, [dispatch, username]);

  const onOpenEditModal = () => {
    setVisibleEditModal(true);
  };

  const onCloseEditModal = () => {
    setVisibleEditModal(false);
  };

  if (!user || fetchUserErrors) {
    return (
      <Paper variant="outlined" className={s.feedWrapper} square>
        <LoadingCircle />
        <Notification open={!!fetchUserErrors} message={fetchUserErrors} type="error" />
      </Paper>
    );
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
            {tweets?.length} твитов
          </Typography>
        </div>
      </Paper>
      <ProfileUserInfo user={user} currentUser={currentUser} onOpenEditModal={onOpenEditModal} />
      <Tabs username={user.username} />
      {tweets && !isTweetsLoading ? <TweetsFeed tweets={tweets} /> : <LoadingCircle />}
      {visibleEditModal && <EditProfileModal onClose={onCloseEditModal} open={visibleEditModal} />}
    </Paper>
  );
};

export default ProfilePage;
