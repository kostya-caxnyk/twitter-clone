import React from 'react';
import classnames from 'classnames';

import IconButton from '@material-ui/core/IconButton';
import { Avatar, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ChatBubbleIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatIcon from '@material-ui/icons/Repeat';
import ReplyIcon from '@material-ui/icons/Reply';

import useHomeStyles from '../pages/HomePage/useHomeStyles';
import { formatToFullLabel } from '../utils/formatDate';
import ImagesList from './ImagesList';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLikeTweet, fetchAddComment } from '../store/ducks/tweet/actionCreators';
import {
  selectIsAddCommentLoading,
  selectIsAddCommentLoaded,
} from '../store/ducks/tweet/selectors';
import { Tweet } from '../store/ducks/tweets/contracts/state';
import AddTweetForm from './AddTweetForm';
import ModalBlock from './ModalBlock';
import TweetWithoutButtons from './TweetWithoutButtons';
import { selectUserData } from '../store/ducks/user/selectors';
import LikeTweetBtn from './LikeTweetBtn';

interface BigTweetProps {
  tweet: Tweet;
}

interface ICommentModal {
  open: boolean;
  tweet: null | Tweet;
}

const BigTweet: React.FC<BigTweetProps> = ({ tweet }): React.ReactElement => {
  const s = useHomeStyles();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUserData);
  const isAddCommentLoading = useSelector(selectIsAddCommentLoading);
  const isAddCommentLoaded = useSelector(selectIsAddCommentLoaded);
  const [commentModal, setCommentModal] = React.useState<ICommentModal>({
    open: false,
    tweet: null,
  });

  React.useEffect(() => {
    if (isAddCommentLoaded) {
      setCommentModal({ open: false, tweet: null });
    }
  }, [isAddCommentLoaded]);

  const onClickLikeTweet = (_: any, id: string, isLiked: boolean) => {
    dispatch(fetchLikeTweet(id, isLiked));
  };

  const handleOpenAddCommentModal = (tweet: Tweet) => {
    setCommentModal({
      open: true,
      tweet,
    });
  };

  const handleCloseAddCommentModal = () => {
    setCommentModal({
      open: false,
      tweet: null,
    });
  };

  const handleAddComment = (text: string, images: File[]) => {
    const tweetId = commentModal.tweet?._id;
    if (!tweetId) {
      return;
    }
    dispatch(fetchAddComment(tweetId, text, images));
  };

  const isTweetLiked = currentUser ? currentUser.likedTweets?.includes(tweet._id) : false;

  const commentsCount = tweet.comments?.length;
  const likesCount = tweet.likes?.filter((id) => id !== currentUser?._id).length + +isTweetLiked;
  //const retweetsCount = tweet.retweets?.length;
  return (
    <>
      <Paper variant="outlined" className={s.bigTweet} square>
        <div className={s.bigTweetUserInfo}>
          <div className={s.tweetAvatarWrapper}>
            <Link to={`/profile/${tweet.user.username}`}>
              <Avatar
                src={tweet.user.avatarUrl}
                className={s.tweetAvatar}
                alt={`Аватар ${tweet.user.name}`}
              />
            </Link>
          </div>
          <div>
            <p>
              <b>
                <Link to={`/profile/${tweet.user.username}`}>{tweet.user.name} </Link>
              </b>
            </p>
            <p>
              <span className={s.tweetUserName}>@{tweet.user.username} </span>
            </p>
          </div>
        </div>
        <div style={{ width: '100%' }}>
          <Typography className={classnames(s.tweetText, s.bigTweetText)}>{tweet.text}</Typography>
          <ImagesList images={tweet.images} />
          <Typography className={s.tweetDate}>{formatToFullLabel(tweet.createdAt)}</Typography>
          <div className={classnames(s.tweetButtons, s.bigTweetButtons)}>
            <div>
              <IconButton
                className={classnames(s.tweetIcon, s.bigTweetIcon)}
                onClick={() => handleOpenAddCommentModal(tweet)}>
                <ChatBubbleIcon />
              </IconButton>
              {!!commentsCount && <span>{commentsCount}</span>}
            </div>
            <div>
              <IconButton className={classnames(s.tweetIcon, s.bigTweetIcon)}>
                <RepeatIcon />
              </IconButton>
            </div>
            <div>
              <LikeTweetBtn handleLike={onClickLikeTweet} id={tweet._id} isLiked={isTweetLiked} />
              {!!likesCount && <span>{likesCount}</span>}
            </div>
            <div>
              <IconButton className={classnames(s.tweetIcon, s.bigTweetIcon)}>
                <ReplyIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </Paper>
      {commentModal.tweet && (
        <ModalBlock visible={commentModal.open} onClose={handleCloseAddCommentModal}>
          <TweetWithoutButtons tweet={commentModal.tweet} />
          <AddTweetForm
            rowsMin={4}
            onAddTweet={handleAddComment}
            placeholder="Твитнуть в ответ"
            btnLabel="Ответить"
            isLoading={isAddCommentLoading}
            isLoaded={isAddCommentLoaded}
          />
        </ModalBlock>
      )}
    </>
  );
};

export default BigTweet;
