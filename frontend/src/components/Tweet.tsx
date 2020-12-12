import React from 'react';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { Avatar, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ChatBubbleIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import RepeatIcon from '@material-ui/icons/Repeat';
import ReplyIcon from '@material-ui/icons/Reply';
import { useHomeStyles } from '../pages/Home';

interface TweetProps {
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    name: string;
    username: string;
    avatarUrl: string;
  };
  text: string;
}

const Tweet: React.FC<TweetProps> = ({ classes: s, text, user }): React.ReactElement => {
  return (
    <Paper variant="outlined" className={s.tweet} square>
      <Grid container spacing={0}>
        <Grid item className={s.tweetAvatarWrapper}>
          <Avatar src={user.avatarUrl} className={s.tweetAvatar} alt={`Аватар ${user.name}`} />
        </Grid>
        <Grid item xs>
          <div className={s.tweetHeader}>
            <b>{user.name} </b>
            <span className={s.tweetUserName}>@{user.username} </span>
            <span style={{ padding: '0 3px' }}>·</span>
            <span className={s.tweetDate}>11 дек.</span>
          </div>
          <Typography className={s.tweetText}>{text}</Typography>
          <div className={s.tweetButtons}>
            <div>
              <IconButton>
                <ChatBubbleIcon className={s.tweetIcon} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <RepeatIcon className={s.tweetIcon} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <LikeIcon className={s.tweetIcon} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <ReplyIcon className={s.tweetIcon} />
              </IconButton>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Tweet;
