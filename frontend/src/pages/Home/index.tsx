import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tweet from '../../components/Tweet';
import SideMenu from '../../components/SideMenu';

import useHomeStyles from './useHomeStyles';
import AddTweetForm from '../../components/AddTweetForm';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import LoadingCircle from '../../components/LoadingCircle';
import SearchTextField from '../../components/SearchTextField';
import BackButton from '../../components/BackButton';
import TweetPage from '../TweetPage';
import RightSideBar from '../RightSideBar';

const Home = () => {
  const s = useHomeStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <Container maxWidth="lg" className={s.wrapper}>
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu />
        </Grid>
        <Grid sm={8} md={6} item>
          <Paper variant="outlined" className={s.feedWrapper} square>
            <Paper variant="outlined" className={s.feedHeader}>
              <Route path="/home/:any">
                <BackButton />
              </Route>
              <Route path="/home" exact>
                <Typography variant="h6" className={s.feedHeaderLabel}>
                  Главная
                </Typography>
              </Route>
              <Route path="/home/tweet">
                <Typography variant="h6" className={s.feedHeaderLabel}>
                  Твитнуть
                </Typography>
              </Route>
              <Route path="/home/search">
                <SearchTextField />
              </Route>
            </Paper>
            <Route path={['/home', '/home/search']} exact>
              <AddTweetForm />
              <Paper square className={s.gap} variant="outlined" />
            </Route>

            <Route path="/home" exact>
              {isLoading ? (
                <LoadingCircle />
              ) : (
                tweets.map((tweet) => <Tweet {...tweet} key={tweet._id} />)
              )}
            </Route>

            <Route path="/home/tweet/:id" component={TweetPage} exact />
          </Paper>
        </Grid>
        <Grid sm={3} md={3} item>
          <RightSideBar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
