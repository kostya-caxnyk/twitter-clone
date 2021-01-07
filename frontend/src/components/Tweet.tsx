import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import { Avatar, ListItemIcon, Menu, MenuItem, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ChatBubbleIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/DeleteForeverOutlined';
import RepeatIcon from '@material-ui/icons/Repeat';
import ReplyIcon from '@material-ui/icons/Reply';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import useHomeStyles from '../pages/HomePage/useHomeStyles';
import { Link } from 'react-router-dom';
import { formatToShortLabel } from '../utils/formatDate';
import { fetchDeleteTweet } from '../store/ducks/tweets/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { ImageData } from '../store/types';
import ImagesList from './ImagesList';
import { User } from '../store/ducks/user/contracts/state';
import { selectUserData } from '../store/ducks/user/selectors';

interface TweetProps {
  user: User;
  images: ImageData[];
  text: string;
  _id: string;
  createdAt: string;
}

const Tweet: React.FC<TweetProps> = ({
  text,
  user,
  _id,
  createdAt,
  images,
}): React.ReactElement => {
  const s = useHomeStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const currentUser = useSelector(selectUserData);

  const onOpenMoreInfo = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMoreInfo = (event: React.MouseEvent) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const onClickDeleteTweet = (event: React.MouseEvent) => {
    event.stopPropagation();
    setAnchorEl(null);
    dispatch(fetchDeleteTweet(_id));
  };

  const isAuthor = currentUser?.username === user.username;

  return (
    <>
      <Link to={`/tweet/${_id}`}>
        <Paper variant="outlined" className={s.tweet} square>
          <div className={s.tweetAvatarWrapper}>
            <Avatar src={user.avatarUrl} className={s.tweetAvatar} alt={`Аватар ${user.name}`} />
          </div>
          <div style={{ width: '100%' }}>
            <div className={s.tweetHeader}>
              <div>
                <b>{user.name} </b>
                <span className={s.tweetUserName}>@{user.username} </span>
                <span style={{ padding: '0 3px' }}>·</span>
                <span className={s.tweetDate}>{formatToShortLabel(createdAt)}</span>
              </div>
              {isAuthor && (
                <IconButton className={s.tweetHeaderMoreIcon} onClick={onOpenMoreInfo}>
                  <MoreIcon />
                </IconButton>
              )}
            </div>
            <Typography className={s.tweetText}>{text}</Typography>
            <ImagesList images={images} />
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
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMoreInfo}
        className={s.tweetMenu}>
        <MenuItem onClick={onClickDeleteTweet} className={s.tweetMenuDelete}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          Удалить твит
        </MenuItem>
      </Menu>
    </>
  );
};

export default Tweet;
