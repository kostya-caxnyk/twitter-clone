import classnames from 'classnames';
import React from 'react';

import { Paper, Typography, Avatar, IconButton } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import useHomeStyles from '../pages/Home/useHomeStyles';

const Users = () => {
  const s = useHomeStyles();
  const users = [];
  return (
    <Paper className={s.recommendations}>
      <Typography variant="h6" className={s.recommendationsTitle}>
        Кого читать
      </Typography>
      <Paper className={classnames(s.recomItem, s.recomItemPeople)} square>
        <Avatar
          alt="Remy Sharp"
          src="https://i.stack.imgur.com/gBMMe.png?s=328&g=1"
          className={s.recomItemAvatar}
        />
        <div>
          <Typography className={s.recomItemTitle}>Петро Порошенко</Typography>
          <Typography className={s.recomItemText}>@poroshenko</Typography>
        </div>
        <IconButton className={s.recomItemAddBtn}>
          <PersonAddIcon />
        </IconButton>
      </Paper>
      <Paper className={classnames(s.recomItem, s.recomItemPeople)} square>
        <Avatar
          alt="Remy Sharp"
          src="https://i.stack.imgur.com/gBMMe.png?s=328&g=1"
          className={s.recomItemAvatar}
        />
        <div>
          <Typography className={s.recomItemTitle}>Олександр Турчинов</Typography>
          <Typography className={s.recomItemText}>@Turchynov</Typography>
        </div>
        <IconButton className={s.recomItemAddBtn}>
          <PersonAddIcon />
        </IconButton>
      </Paper>
      <Paper className={s.recomLoadMore}>
        <Typography className={s.recomLoadMoreText}>Показать еще</Typography>
      </Paper>
    </Paper>
  );
};

export default Users;
