import classnames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { Paper, Typography, Avatar, IconButton, List, ListItem } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import useHomeStyles from '../pages/HomePage/useHomeStyles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { useSelector } from 'react-redux';
import { selectUsersItems } from '../store/ducks/users/selectors';

const formatLabel = (label: string): string => {
  if (label.length > 14) {
    return label.slice(0, 15) + '...';
  }
  return label;
};

const Users = () => {
  const s = useHomeStyles();
  const users = useSelector(selectUsersItems);

  const onClickFollowUser = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    event.stopPropagation();
    //dispatch(followUser(id));
  };

  //const users = [{ name: 'kotya', username: 'bandot322', avatarUrl: '', about: '', _id: '322' }];
  return (
    <Paper className={s.recommendations}>
      <Typography variant="h6" className={s.recommendationsTitle}>
        Кого читать
      </Typography>
      <List style={{ padding: 0 }}>
        {users.map((user) => (
          <Link to={`/${user.username}`}>
            <ListItem className={s.recomItem}>
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.stack.imgur.com/gBMMe.png?s=328&g=1"
                  className={s.recomItemAvatar}
                />
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
                <IconButton onClick={(e) => onClickFollowUser(e, user._id)}>
                  <PersonAddIcon className={s.recomItemBtn} />
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
