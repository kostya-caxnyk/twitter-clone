import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import useHomeStyles from './useHomeStyles';
import AddTweetForm from '../../components/AddTweetForm';
import { fetchAddTweet, fetchTweets } from '../../store/ducks/tweets/actionCreators';
import {
  selectHasDeleteTweetError,
  selectIsAddFormStateLoading,
  selectIsAddTweetLoaded,
  selectIsTweetsLoading,
  selectTweetsItems,
} from '../../store/ducks/tweets/selectors';
import LoadingCircle from '../../components/LoadingCircle';
import Notification from '../../components/Notification';
import TweetsFeed from '../../components/TweetsFeed';

const Home = () => {
  const s = useHomeStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);
  const deleteTweetError = useSelector(selectHasDeleteTweetError);
  const isAddTweetLoading = useSelector(selectIsAddFormStateLoading);
  const isAddTweetLoaded = useSelector(selectIsAddTweetLoaded);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  const handleAddTweet = React.useCallback(
    (text: string, images: File[]) => {
      dispatch(fetchAddTweet(text, images));
    },
    [dispatch],
  );

  return (
    <Paper variant="outlined" className={s.feedWrapper} square>
      <Paper variant="outlined" className={s.feedHeader}>
        <Typography variant="h6" className={s.feedHeaderLabel}>
          Главная
        </Typography>
      </Paper>
      <AddTweetForm
        onAddTweet={handleAddTweet}
        isLoaded={isAddTweetLoaded}
        isLoading={isAddTweetLoading}
      />

      {isLoading || !tweets ? <LoadingCircle /> : <TweetsFeed tweets={tweets} />}
      <Notification open={deleteTweetError} message="Ошибка при удалении твита" type="error" />
    </Paper>
  );
};

export default Home;
