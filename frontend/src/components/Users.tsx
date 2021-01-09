import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { Paper, Typography, Avatar, IconButton, List, ListItem } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import useHomeStyles from '../pages/HomePage/useHomeStyles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsersItems } from '../store/ducks/users/selectors';
import LoadingCircle from './LoadingCircle';
import { fetchUsers } from '../store/ducks/users/actionCreators';

const formatLabel = (label: string): string => {
  if (label.length > 14) {
    return label.slice(0, 14) + '...';
  }
  return label;
};

const Users: React.FC = () => {
  const s = useHomeStyles();
  const dispatch = useDispatch();
  const users = useSelector(selectUsersItems);

  const onClickFollowUser = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    event.stopPropagation();
    //dispatch(followUser(id));
  };

  React.useEffect(() => {
    dispatch(fetchUsers(2));
  }, [dispatch]);

  if (!users) {
    return <LoadingCircle />;
  }

  return (
    <Paper className={s.recommendations}>
      <Typography variant="h6" className={s.recommendationsTitle}>
        Кого читать
      </Typography>
      <List style={{ padding: 0 }}>
        {users.map((user) => (
          <Link to={`/profile/${user.username}`}>
            <ListItem className={s.recomItem}>
              <ListItemAvatar>
                <Avatar alt={user.name} src={user.avatarUrl} className={s.recomItemAvatar} />
              </ListItemAvatar>

              <ListItemText
                primary={
                  <Typography className={s.recomItemTitle}>{formatLabel(user.name)}</Typography>
                }
                secondary={
                  <Typography className={s.recomItemText}>@{formatLabel(user.username)}</Typography>
                }
              />
              <ListItemSecondaryAction>
                <IconButton
                  onClick={(e) => onClickFollowUser(e, user._id)}
                  className={classnames({ [s.recomItemActiveBtn]: true })}>
                  <PersonAddIcon className={s.recomItemBtnIcon} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Link>
        ))}
      </List>

      <Paper className={s.recomLoadMore}>
        <Typography className={s.recomLoadMoreText}>Показать еще</Typography>
      </Paper>
    </Paper>
  );
};

export default Users;
