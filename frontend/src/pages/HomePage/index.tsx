import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tweet from '../../components/Tweet';

import useHomeStyles from './useHomeStyles';
import AddTweetForm from '../../components/AddTweetForm';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import {
  selectHasDeleteTweetError,
  selectIsTweetsLoading,
  selectTweetsItems,
} from '../../store/ducks/tweets/selectors';
import LoadingCircle from '../../components/LoadingCircle';
import Notification from '../../components/Notification';

const Home = () => {
  const s = useHomeStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);
  const deleteTweetError = useSelector(selectHasDeleteTweetError);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <Paper variant="outlined" className={s.feedWrapper} square>
      <Paper variant="outlined" className={s.feedHeader}>
        <Typography variant="h6" className={s.feedHeaderLabel}>
          Главная
        </Typography>
      </Paper>
      <AddTweetForm />

      {isLoading ? <LoadingCircle /> : tweets.map((tweet) => <Tweet {...tweet} key={tweet._id} />)}
      <Notification open={deleteTweetError} message="Ошибка при удалении твита" type="error" />
    </Paper>
  );
};

export default Home;
