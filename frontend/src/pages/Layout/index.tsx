import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import SideMenu from '../../components/SideMenu';

import RightSideBar from '../RightSideBar';
import useHomeStyles from '../HomePage/useHomeStyles';
import { Route, Switch } from 'react-router-dom';
import Home from '../HomePage';
import SearchPage from '../SearchPage';
import TweetPage from '../TweetPage';
import ProfilePage from '../ProfilePage';

const Layout = () => {
  const s = useHomeStyles();

  return (
    <Container maxWidth="lg" className={s.wrapper}>
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu />
        </Grid>
        <Grid sm={8} md={6} item>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/explore" component={SearchPage} />
            <Route path="/tweet/:id" component={TweetPage} />
            <Route path="/profile/:username" component={ProfilePage} />
          </Switch>
        </Grid>
        <Grid sm={3} md={3} item>
          <RightSideBar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
