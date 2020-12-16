import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';

import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, Container, IconButton, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import Tweet from '../../components/Tweet';
import SideMenu from '../../components/SideMenu';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';

import useHomeStyles from './useHomeStyles';
import AddTweetForm from '../../components/AddTweetForm';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import CircularProgress from '@material-ui/core/CircularProgress';
import Topics from '../../components/Topics';
import LoadingCircle from '../../components/LoadingCircle';

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
              <Typography variant="h6" className={s.feedHeaderLabel}>
                Главная
              </Typography>
            </Paper>
            <AddTweetForm />
            <Paper square className={s.gap} variant="outlined" />
            {isLoading ? (
              <LoadingCircle />
            ) : (
              tweets.map((tweet) => <Tweet text={tweet.text} user={tweet.user} key={tweet._id} />)
            )}
          </Paper>
        </Grid>
        <Grid sm={3} md={3} item>
          <TextField
            placeholder="Поиск в Твиттере"
            className={s.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
          />

          <Topics />

          <Paper className={s.recommendations}>
            <Typography variant="h6" className={s.recommendationsTitle}>
              Кого читать
            </Typography>
            <Paper className={classnames(s.recomItem, s.recomItemPeople)} square>
              <Avatar
                alt="Remy Sharp"
                src="https://i.stack.imgur.com/gBMMe.png?s=328&g=1"
                className={s.recomItemAvatar}
              />
              <div>
                <Typography className={s.recomItemTitle}>Петро Порошенко</Typography>
                <Typography className={s.recomItemText}>@poroshenko</Typography>
              </div>
              <IconButton className={s.recomItemAddBtn}>
                <PersonAddIcon />
              </IconButton>
            </Paper>
            <Paper className={classnames(s.recomItem, s.recomItemPeople)} square>
              <Avatar
                alt="Remy Sharp"
                src="https://i.stack.imgur.com/gBMMe.png?s=328&g=1"
                className={s.recomItemAvatar}
              />
              <div>
                <Typography className={s.recomItemTitle}>Олександр Турчинов</Typography>
                <Typography className={s.recomItemText}>@Turchynov</Typography>
              </div>
              <IconButton className={s.recomItemAddBtn}>
                <PersonAddIcon />
              </IconButton>
            </Paper>
            <Paper className={s.recomLoadMore}>
              <Typography className={s.recomLoadMoreText}>Показать еще</Typography>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
