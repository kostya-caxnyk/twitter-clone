import React from 'react';
import { Link } from 'react-router-dom';

import { Paper, Typography, Avatar, List, ListItem } from '@material-ui/core';
import useHomeStyles from '../pages/HomePage/useHomeStyles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsersItems } from '../store/ducks/users/selectors';
import LoadingCircle from './LoadingCircle';
import { fetchFollowUser, fetchUsers } from '../store/ducks/users/actionCreators';
import { selectUserData } from '../store/ducks/user/selectors';
import FollowUserBtn from './FollowUserBtn';

const Users: React.FC = () => {
  const s = useHomeStyles();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUserData);
  const users = useSelector(selectUsersItems);

  const onClickFollowUser = (event: React.MouseEvent, id: string, isFollowing: boolean) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(fetchFollowUser({ id, isFollowing }));
  };

  React.useEffect(() => {
    dispatch(fetchUsers(4));
  }, [dispatch]);

  if (!users || !currentUser) {
    return <LoadingCircle />;
  }

  return (
    <Paper className={s.recommendations}>
      <Typography variant="h6" className={s.recommendationsTitle}>
        Кого читать
      </Typography>
      <List style={{ padding: 0 }}>
        {users.map((user) => {
          const isFollowing = currentUser.following.includes(user._id);
          return (
            <Link to={`/profile/${user.username}`} key={user._id}>
              <ListItem className={s.recomItem}>
                <ListItemAvatar>
                  <Avatar alt={user.name} src={user.avatarUrl} className={s.recomItemAvatar} />
                </ListItemAvatar>

                <ListItemText
                  primary={<Typography className={s.recomItemTitle}>{user.name}</Typography>}
                  secondary={<Typography className={s.recomItemText}>@{user.username}</Typography>}
                />
                <ListItemSecondaryAction>
                  <FollowUserBtn
                    isFollowing={isFollowing}
                    onClickFollowUser={onClickFollowUser}
                    userId={user._id}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </Link>
          );
        })}
      </List>

      <Paper className={s.recomLoadMore}>
        <Typography className={s.recomLoadMoreText}>Показать еще</Typography>
      </Paper>
    </Paper>
  );
};

export default Users;
