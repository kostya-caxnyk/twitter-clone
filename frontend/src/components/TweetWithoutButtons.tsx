import { Paper, Avatar, Typography } from '@material-ui/core';
import React from 'react';
import useHomeStyles from '../pages/HomePage/useHomeStyles';
import { Tweet } from '../store/ducks/tweets/contracts/state';
import { formatToShortLabel } from '../utils/formatDate';

const TweetWithoutButtons: React.FC<{ tweet: Tweet }> = ({ tweet }) => {
  const s = useHomeStyles();

  return (
    <Paper variant="outlined" className={`${s.tweet} ${s.tweetNoClick}`} square>
      <div className={s.tweetAvatarWrapper}>
        <Avatar
          src={tweet.user.avatarUrl}
          className={s.tweetAvatar}
          alt={`Аватар ${tweet.user.name}`}
        />
        <div className={s.tweetAvatarLine} />
      </div>
      <div style={{ width: '100%' }}>
        <div className={s.tweetHeader}>
          <div>
            <b>{tweet.user.name} </b>
            <span className={s.tweetUserName}>@{tweet.user.username} </span>
            <span style={{ padding: '0 3px' }}>·</span>
            <span className={s.tweetDate}>{formatToShortLabel(tweet.createdAt)}</span>
          </div>
        </div>
        <Typography className={s.tweetText}>{tweet.text}</Typography>
      </div>
    </Paper>
  );
};

export default TweetWithoutButtons;
