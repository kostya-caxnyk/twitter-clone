import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Container, Hidden } from '@material-ui/core';
import SideMenu from '../../components/SideMenu';

import RightSideBar from '../RightSideBar';
import useHomeStyles from '../HomePage/useHomeStyles';
import { Route, Switch } from 'react-router-dom';
import Home from '../HomePage';
import SearchPage from '../SearchPage';
import TweetPage from '../TweetPage';
import ProfilePage from '../ProfilePage';

const Layout: React.FC = () => {
  const s = useHomeStyles();

  return (
    <Container maxWidth="lg" className={s.wrapper}>
      <Grid container spacing={3}>
        <Grid xs={1} md={1} lg="auto" style={{ width: 255, paddingBottom: 0 }} item>
          <SideMenu />
        </Grid>
        <Grid xs md lg item style={{ paddingBottom: 0 }}>
          <Switch>
            <Route path={['/home', '/']} component={Home} exact />
            <Route path="/explore" component={SearchPage} />
            <Route path="/tweet/:id" component={TweetPage} />
            <Route path="/profile/:username" component={ProfilePage} />
          </Switch>
        </Grid>
        <Hidden smDown>
          <Grid md="auto" lg="auto" style={{ width: 350, paddingBottom: 0 }} item>
            <RightSideBar />
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
};

export default Layout;
