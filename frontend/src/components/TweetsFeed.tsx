import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchLikeTweet } from '../store/ducks/tweet/actionCreators';
import { fetchDeleteTweet } from '../store/ducks/tweets/actionCreators';
import { Tweet } from '../store/ducks/tweets/contracts/state';
import TweetComponent from './Tweet';

interface TweetsFeedProps {
  tweets: Tweet[];
}

const TweetsFeed: React.FC<TweetsFeedProps> = ({ tweets }) => {
  const dispatch = useDispatch();

  const onClickDeleteTweet = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    dispatch(fetchDeleteTweet(id));
  };

  const onClickLikeTweet = (e: React.MouseEvent, id: string, isLiked: boolean) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(fetchLikeTweet(id, isLiked));
  };

  return (
    <>
      {tweets.map((tweet) => (
        <TweetComponent
          tweet={tweet}
          handleDelete={onClickDeleteTweet}
          handleLike={onClickLikeTweet}
          key={tweet._id}
        />
      ))}
    </>
  );
};

export default TweetsFeed;
