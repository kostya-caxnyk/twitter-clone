import React from 'react';
import { Tweet } from '../store/ducks/tweets/contracts/state';
import TweetComponent from './Tweet';

interface TweetsFeedProps {
  tweets: Tweet[];
}

const TweetsFeed: React.FC<TweetsFeedProps> = ({ tweets }) => {
  return (
    <>
      {tweets.map((tweet) => (
        <TweetComponent {...tweet} key={tweet._id} />
      ))}
    </>
  );
};

export default TweetsFeed;
