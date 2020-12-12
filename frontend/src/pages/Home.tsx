import React from 'react';

import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { Container, makeStyles, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import grey from '@material-ui/core/colors/grey';
import Tweet from '../components/Tweet';
import SideMenu from '../components/SideMenu';

export const useHomeStyles = makeStyles((theme) => ({
  wrapper: {
    height: '100vh',
  },
  navSideBarWrapper: {
    width: 255,
  },
  navSideBar: {
    position: 'fixed',
  },
  navList: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  navListItem: {
    marginBottom: 15,
  },
  navLink: {
    color: 'black',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px',
    borderRadius: 25,
    transition: 'background-color 0.1s ease-in-out',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      '& svg': {
        color: theme.palette.primary.main,
      },
      color: theme.palette.primary.main,
    },
  },
  navIcon: {
    color: 'black',
    fontSize: 30,
  },
  navListLabel: {
    fontWeight: 700,
    margin: '0 15px 0 20px',
  },
  navTweetButton: {
    height: 49,
  },
  logoIcon: {
    fontSize: 36,
  },
  logoBtn: {
    padding: 10,
    margin: '10px 0',
    '& a': {
      height: 36,
    },
  },
  activeLink: {
    '& svg': {
      color: theme.palette.primary.main,
    },
    color: theme.palette.primary.main,
  },
  searchInput: {
    backgroundColor: 'rgb(235, 238, 240)',
    padding: '5px 15px',
    borderRadius: 20,
    marginTop: 8,
  },
  feedWrapper: {
    height: '100vh',
    borderTop: 0,
    borderBottom: 0,
  },
  feedHeader: {
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    cursor: 'pointer',
    marginBottom: 100,
  },
  feedHeaderLabel: {
    padding: 15,
    fontWeight: 800,
    color: 'black',
  },
  tweet: {
    minHeight: 88,
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.03)',
      cursor: 'pointer',
    },
    padding: '10px 15px 2px',
    borderRight: 0,
    borderLeft: 0,
  },
  tweetAvatarWrapper: {
    width: 49,
    marginRight: 10,
  },
  tweetAvatar: {
    height: 49,
    width: 49,
  },
  tweetHeader: {
    fontSize: 15,
  },
  tweetUserName: {
    color: grey[600],
  },
  tweetDate: {
    color: grey[600],
  },
  tweetText: {
    lineHeight: 1.3125,
    color: 'black',
  },
  tweetButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 430,
    position: 'relative',
    left: -15,
  },
  tweetIcon: {
    fontSize: 20,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

export const Home = () => {
  const s = useHomeStyles();

  return (
    <Container maxWidth="lg" className={s.wrapper}>
      <Grid container spacing={3}>
        <Grid item className={s.navSideBarWrapper}>
          <SideMenu classes={s} />
        </Grid>
        <Grid item xs={6}>
          <Paper variant="outlined" className={s.feedWrapper} square>
            <Paper variant="outlined" className={s.feedHeader}>
              <Typography variant="h6" className={s.feedHeaderLabel}>
                Главная
              </Typography>
            </Paper>
            <Tweet
              classes={s}
              text="Дві українські правозахисниці Тетяна Печончик і Марта Чумало отримали премію «Тюльпан прав людини» за видатні досягнення у боротьбі за права людини МЗС Нідерландів"
              user={{
                username: 'Kostya20335905',
                name: 'Kostya',
                avatarUrl:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png',
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
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
        </Grid>
      </Grid>
    </Container>
  );
};
