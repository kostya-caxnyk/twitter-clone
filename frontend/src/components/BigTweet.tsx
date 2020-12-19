import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import { Avatar, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ChatBubbleIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import RepeatIcon from '@material-ui/icons/Repeat';
import ReplyIcon from '@material-ui/icons/Reply';
import useHomeStyles from '../pages/Home/useHomeStyles';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

interface BigTweetProps {
  user: {
    name: string;
    username: string;
    avatarUrl: string;
  };
  text: string;
  _id: string;
  date: string;
}

const BigTweet: React.FC<BigTweetProps> = ({ text, user, _id, date }): React.ReactElement => {
  const s = useHomeStyles();

  return (
    <Paper variant="outlined" className={s.bigTweet} square>
      <div className={s.bigTweetUserInfo}>
        <div className={s.tweetAvatarWrapper}>
          <Avatar src={user.avatarUrl} className={s.tweetAvatar} alt={`Аватар ${user.name}`} />
        </div>
        <div>
          <p>
            <b>{user.name} </b>
          </p>
          <p>
            <span className={s.tweetUserName}>@{user.username} </span>
          </p>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <Typography className={classnames(s.tweetText, s.bigTweetText)}>{text}</Typography>
        <Typography className={s.tweetDate}>{date}</Typography>
        <div className={classnames(s.tweetButtons, s.bigTweetButtons)}>
          <div>
            <IconButton className={classnames(s.tweetIcon, s.bigTweetIcon)}>
              <ChatBubbleIcon />
            </IconButton>
            <span>1</span>
          </div>
          <div>
            <IconButton className={classnames(s.tweetIcon, s.bigTweetIcon)}>
              <RepeatIcon />
            </IconButton>
          </div>
          <div>
            <IconButton className={classnames(s.tweetIcon, s.bigTweetIcon)}>
              <LikeIcon />
            </IconButton>
          </div>
          <div>
            <IconButton className={classnames(s.tweetIcon, s.bigTweetIcon)}>
              <ReplyIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default BigTweet;
