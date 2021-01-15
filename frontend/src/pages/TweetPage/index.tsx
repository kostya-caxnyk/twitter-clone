import { Paper, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import BigTweet from '../../components/BigTweet';
import LoadingCircle from '../../components/LoadingCircle';
import Notification from '../../components/Notification';
import TweetsFeed from '../../components/TweetsFeed';
import {
  fetchComments,
  fetchTweetData,
  setTweetData,
} from '../../store/ducks/tweet/actionCreators';
import {
  selectComments,
  selectIsCommentsError,
  selectIsCommentsLoading,
  selectIsTweetDataHasError,
  selectIsTweetDataLoading,
  selectTweetData,
} from '../../store/ducks/tweet/selectors';
import useHomeStyles from '../HomePage/useHomeStyles';

const TweetPage: React.FC = () => {
  const s = useHomeStyles();

  const tweetData = useSelector(selectTweetData);
  const isTweetLoading = useSelector(selectIsTweetDataLoading);
  const tweetHasError = useSelector(selectIsTweetDataHasError);
  const comments = useSelector(selectComments);
  const isCommentsLoading = useSelector(selectIsCommentsLoading);
  const commentsHaveError = useSelector(selectIsCommentsError);
  const dispatch = useDispatch();
  const params: { id: string } = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(fetchTweetData(id));
    dispatch(fetchComments(id));
    return () => {
      dispatch(setTweetData(null));
    };
  }, [dispatch, id]);

  return (
    <>
      <Paper variant="outlined" className={s.feedWrapper} square>
        <Paper variant="outlined" className={s.feedHeader}>
          <BackButton />
          <Typography variant="h6" className={s.feedHeaderLabel}>
            Твитнуть
          </Typography>
        </Paper>
        {isTweetLoading || !tweetData ? <LoadingCircle /> : <BigTweet tweet={tweetData} />}
        {isCommentsLoading ? <LoadingCircle /> : comments ? <TweetsFeed tweets={comments} /> : null}
      </Paper>
      <Notification open={tweetHasError} message="Ошибка при загрузкe твита" type="error" />
      <Notification
        open={commentsHaveError}
        message="Ошибка при загрузкe коментариев"
        type="error"
      />
    </>
  );
};

export default TweetPage;
