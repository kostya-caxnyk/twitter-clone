import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import { Avatar, ListItemIcon, Menu, MenuItem, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ChatBubbleIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import DeleteIcon from '@material-ui/icons/DeleteForeverOutlined';
import RepeatIcon from '@material-ui/icons/Repeat';
import ReplyIcon from '@material-ui/icons/Reply';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import useHomeStyles from '../pages/HomePage/useHomeStyles';
import { formatToShortLabel } from '../utils/formatDate';
import ImagesList from './ImagesList';
import { selectUserData } from '../store/ducks/user/selectors';
import { Tweet as TweetInterface } from '../store/ducks/tweets/contracts/state';
import LikeTweetBtn from './LikeTweetBtn';

interface TweetProps {
  tweet: TweetInterface;
  handleDelete: (e: React.MouseEvent, id: string) => void;
  handleLike: (e: React.MouseEvent, id: string, isLiked: boolean) => void;
  onOpenCommentModal: (e: React.MouseEvent, tweet: TweetInterface) => void;
}

const Tweet: React.FC<TweetProps> = React.memo(
  ({ tweet, handleDelete, handleLike, onOpenCommentModal }): React.ReactElement => {
    const s = useHomeStyles();
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

    const isAuthor = currentUser?.username === tweet.user.username;

    const isTweetLiked = currentUser ? currentUser.likedTweets?.includes(tweet._id) : false;

    const commentsCount = tweet.comments?.length;
    const likesCount = tweet.likes?.filter((id) => id !== currentUser?._id).length + +isTweetLiked;
    const retweetsCount = tweet.retweets?.length;

    return (
      <>
        <Link to={`/tweet/${tweet._id}`}>
          <Paper variant="outlined" className={s.tweet} square>
            <div className={s.tweetAvatarWrapper}>
              <Link to={`/profile/${tweet.user.username}`}>
                <Avatar
                  src={tweet.user.avatarUrl}
                  className={s.tweetAvatar}
                  alt={`Аватар ${tweet.user.name}`}
                />
              </Link>
            </div>
            <div style={{ width: '100%' }}>
              <div className={s.tweetHeader}>
                <div>
                  <Link to={`/profile/${tweet.user.username}`} className={s.tweetHeaderLink}>
                    <b>{tweet.user.name} </b>
                    <span className={s.tweetUserName}>@{tweet.user.username} </span>
                  </Link>
                  <span style={{ padding: '0 3px' }}>·</span>
                  <span className={s.tweetDate}>{formatToShortLabel(tweet.createdAt)}</span>
                </div>

                {isAuthor && (
                  <IconButton className={s.tweetHeaderMoreIcon} onClick={onOpenMoreInfo}>
                    <MoreIcon />
                  </IconButton>
                )}
              </div>
              <Typography className={s.tweetText}>{tweet.text}</Typography>
              <ImagesList images={tweet.images} />
              <div className={s.tweetButtons}>
                <div>
                  <IconButton className={s.tweetIcon} onClick={(e) => onOpenCommentModal(e, tweet)}>
                    <ChatBubbleIcon />
                  </IconButton>
                  {commentsCount ? <span>{commentsCount}</span> : null}
                </div>
                <div>
                  <IconButton className={s.tweetIcon}>
                    <RepeatIcon />
                  </IconButton>
                  {retweetsCount ? <span>{retweetsCount}</span> : null}
                </div>
                <div>
                  <LikeTweetBtn handleLike={handleLike} id={tweet._id} isLiked={isTweetLiked} />
                  {likesCount ? <span>{likesCount}</span> : null}
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
          <MenuItem onClick={(e) => handleDelete(e, tweet._id)} className={s.tweetMenuDelete}>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            Удалить твит
          </MenuItem>
        </Menu>
      </>
    );
  },
);

export default Tweet;
