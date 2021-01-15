import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddComment, fetchLikeTweet } from '../store/ducks/tweet/actionCreators';
import {
  selectIsAddCommentLoaded,
  selectIsAddCommentLoading,
} from '../store/ducks/tweet/selectors';
import { fetchDeleteTweet } from '../store/ducks/tweets/actionCreators';
import { Tweet } from '../store/ducks/tweets/contracts/state';
import AddTweetForm from './AddTweetForm';
import ModalBlock from './ModalBlock';
import TweetComponent from './Tweet';
import TweetWithoutButtons from './TweetWithoutButtons';

interface TweetsFeedProps {
  tweets: Tweet[];
}

interface ICommentModal {
  open: boolean;
  tweet: null | Tweet;
}

const TweetsFeed: React.FC<TweetsFeedProps> = ({ tweets }) => {
  const dispatch = useDispatch();
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

  const onClickDeleteTweet = React.useCallback(
    (e: React.MouseEvent, id: string) => {
      e.stopPropagation();
      dispatch(fetchDeleteTweet(id));
    },
    [dispatch],
  );

  const onClickLikeTweet = React.useCallback(
    (e: React.MouseEvent, id: string, isLiked: boolean) => {
      e.preventDefault();
      e.stopPropagation();
      dispatch(fetchLikeTweet(id, isLiked));
    },
    [dispatch],
  );

  const handleOpenAddCommentModal = React.useCallback((e: React.MouseEvent, tweet: Tweet) => {
    e.preventDefault();
    e.stopPropagation();
    setCommentModal({
      open: true,
      tweet,
    });
  }, []);

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

  return (
    <>
      {tweets.map((tweet) => (
        <TweetComponent
          tweet={tweet}
          handleDelete={onClickDeleteTweet}
          handleLike={onClickLikeTweet}
          onOpenCommentModal={handleOpenAddCommentModal}
          key={tweet._id}
        />
      ))}
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

export default TweetsFeed;
