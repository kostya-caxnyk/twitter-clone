import React from 'react';
import classnames from 'classnames';

import IconButton from '@material-ui/core/IconButton';
import { Avatar, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ChatBubbleIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import RepeatIcon from '@material-ui/icons/Repeat';
import ReplyIcon from '@material-ui/icons/Reply';

import useHomeStyles from '../pages/HomePage/useHomeStyles';
import { formatToFullLabel } from '../utils/formatDate';
import { ImageData } from '../store/types';
import ImagesList from './ImagesList';

interface BigTweetProps {
  user: {
    name: string;
    username: string;
    avatarUrl: string;
  };
  text: string;
  _id: string;
  createdAt: string;
  images: ImageData[];
}

const BigTweet: React.FC<BigTweetProps> = ({
  text,
  user,
  _id,
  createdAt,
  images,
}): React.ReactElement => {
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
        <ImagesList images={images} />
        <Typography className={s.tweetDate}>{formatToFullLabel(createdAt)}</Typography>
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
