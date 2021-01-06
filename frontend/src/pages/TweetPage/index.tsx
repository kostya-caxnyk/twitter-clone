import { Paper, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import BigTweet from '../../components/BigTweet';
import LoadingCircle from '../../components/LoadingCircle';
import { fetchTweetData, setTweetData } from '../../store/ducks/tweet/actionCreators';
import { selectIsTweetDataLoading, selectTweetData } from '../../store/ducks/tweet/selectors';
import useHomeStyles from '../HomePage/useHomeStyles';

const TweetPage: React.FC = () => {
  const s = useHomeStyles();

  const tweetData = useSelector(selectTweetData);
  const isLoading = useSelector(selectIsTweetDataLoading);
  const dispatch = useDispatch();
  const params: { id: string } = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(fetchTweetData(id));
    return () => {
      dispatch(setTweetData(null));
    };
  }, [dispatch, id]);

  return (
    <Paper variant="outlined" className={s.feedWrapper} square>
      <Paper variant="outlined" className={s.feedHeader}>
        <BackButton />
        <Typography variant="h6" className={s.feedHeaderLabel}>
          Твитнуть
        </Typography>
      </Paper>
      {isLoading || !tweetData ? <LoadingCircle /> : <BigTweet {...tweetData} />}
    </Paper>
  );
};

export default TweetPage;
