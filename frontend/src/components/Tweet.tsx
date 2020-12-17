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

interface TweetProps {
  user: {
    name: string;
    username: string;
    avatarUrl: string;
  };
  text: string;
  _id: string;
}

const Tweet: React.FC<TweetProps> = ({ text, user, _id }): React.ReactElement => {
  const s = useHomeStyles();

  return (
    <Link to={`/home/tweet/${_id}`}>
      <Paper variant="outlined" className={s.tweet} square>
        <div className={s.tweetAvatarWrapper}>
          <Avatar src={user.avatarUrl} className={s.tweetAvatar} alt={`Аватар ${user.name}`} />
        </div>
        <div>
          <div className={s.tweetHeader}>
            <b>{user.name} </b>
            <span className={s.tweetUserName}>@{user.username} </span>
            <span style={{ padding: '0 3px' }}>·</span>
            <span className={s.tweetDate}>11 дек.</span>
          </div>
          <Typography className={s.tweetText}>{text}</Typography>
          <div className={s.tweetButtons}>
            <div>
              <IconButton className={s.tweetIcon}>
                <ChatBubbleIcon />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton className={s.tweetIcon}>
                <RepeatIcon />
              </IconButton>
            </div>
            <div>
              <IconButton className={s.tweetIcon}>
                <LikeIcon />
              </IconButton>
            </div>
            <div>
              <IconButton className={s.tweetIcon}>
                <ReplyIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </Paper>
    </Link>
  );
};

export default Tweet;
