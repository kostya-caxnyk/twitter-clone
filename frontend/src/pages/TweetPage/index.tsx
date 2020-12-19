import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BigTweet from '../../components/BigTweet';
import LoadingCircle from '../../components/LoadingCircle';
import { fetchTweetData, setTweetData } from '../../store/ducks/tweet/actionCreators';
import { selectIsTweetDataLoading, selectTweetData } from '../../store/ducks/tweet/selectors';

const TweetPage = (): React.ReactElement | null => {
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

  if (isLoading || !tweetData) {
    return <LoadingCircle />;
  }

  return <BigTweet {...tweetData} />;
};

export default TweetPage;
