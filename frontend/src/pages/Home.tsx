import React from 'react';
import { NavLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EmailIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentityOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHorizOutlined';
import { Container, makeStyles, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Autorenew } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: '100vh',
  },
  navSideBar: {
    width: 255,
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
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      borderRadius: 25,
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
  },
  feedHeaderLabel: {
    padding: 15,
    fontWeight: 800,
    color: 'black',
  },
}));

const Home = () => {
  const s = useStyles();

  return (
    <Container maxWidth="lg" className={s.wrapper}>
      <Grid container spacing={3}>
        <Grid item className={s.navSideBar}>
          <nav>
            <IconButton aria-label="delete" className={s.logoBtn}>
              <NavLink to="/">
                <TwitterIcon color="primary" className={s.logoIcon} />
              </NavLink>
            </IconButton>
            <ul className={s.navList}>
              <li className={s.navListItem}>
                <NavLink to="/" className={s.navLink} activeClassName={s.activeLink} exact>
                  <HomeIcon className={s.navIcon} />
                  <Typography variant="h6" component="span" className={s.navListLabel}>
                    Главная
                  </Typography>
                </NavLink>
              </li>
              <li className={s.navListItem}>
                <NavLink to="/explore" className={s.navLink} activeClassName={s.activeLink} exact>
                  <SearchIcon className={s.navIcon} />
                  <Typography variant="h6" component="span" className={s.navListLabel}>
                    Поиск
                  </Typography>
                </NavLink>
              </li>
              <li className={s.navListItem}>
                <NavLink
                  to="/notifications"
                  className={s.navLink}
                  activeClassName={s.activeLink}
                  exact>
                  <NotificationsNoneIcon className={s.navIcon} />
                  <Typography variant="h6" component="span" className={s.navListLabel}>
                    Уведомления
                  </Typography>
                </NavLink>
              </li>
              <li className={s.navListItem}>
                <NavLink to="/messages" className={s.navLink} activeClassName={s.activeLink}>
                  <EmailIcon className={s.navIcon} />
                  <Typography variant="h6" component="span" className={s.navListLabel}>
                    Сообщения
                  </Typography>
                </NavLink>
              </li>
              <li className={s.navListItem}>
                <NavLink to="/bookmarks" className={s.navLink} activeClassName={s.activeLink}>
                  <BookmarkBorderIcon className={s.navIcon} />
                  <Typography variant="h6" component="span" className={s.navListLabel}>
                    Закладки
                  </Typography>
                </NavLink>
              </li>
              <li className={s.navListItem}>
                <NavLink to="/lists" className={s.navLink} activeClassName={s.activeLink}>
                  <ListIcon className={s.navIcon} />
                  <Typography variant="h6" component="span" className={s.navListLabel}>
                    Списки
                  </Typography>
                </NavLink>
              </li>
              <li className={s.navListItem}>
                <NavLink to="/profile" className={s.navLink} activeClassName={s.activeLink}>
                  <PermIdentityIcon className={s.navIcon} />
                  <Typography variant="h6" component="span" className={s.navListLabel}>
                    Профиль
                  </Typography>
                </NavLink>
              </li>
            </ul>
          </nav>
        </Grid>
        <Grid item xs={6}>
          <Paper variant="outlined" className={s.feedWrapper} square>
            <Paper variant="outlined" className={s.feedHeader}>
              <Typography variant="h6" className={s.feedHeaderLabel}>
                Главная
              </Typography>
            </Paper>
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

export default Home;
