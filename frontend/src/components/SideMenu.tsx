import React from 'react';
import { NavLink } from 'react-router-dom';

import { Hidden, IconButton } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EmailIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentityOutlined';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

import useHomeStyles from '../pages/Home/useHomeStyles';
import ModalBlock from './ModalBlock';
import AddTweetForm from './AddTweetForm';

interface SideMenuProps {}

const SideMenu: React.FC<SideMenuProps> = () => {
  const s = useHomeStyles();
  const [visibleAddTweet, setVisibleAddTweet] = React.useState(false);

  const handleClickOpenAddTweet = () => {
    setVisibleAddTweet(true);
  };

  const onCloseAddTweet = () => {
    setVisibleAddTweet(false);
  };

  return (
    <nav className={s.navSideBar}>
      <IconButton aria-label="delete" className={s.logoBtn}>
        <NavLink to="/home">
          <TwitterIcon color="primary" className={s.logoIcon} />
        </NavLink>
      </IconButton>
      <ul className={s.navList}>
        <li className={s.navListItem}>
          <NavLink to="/home" className={s.navLink} activeClassName={s.activeLink} exact>
            <HomeIcon className={s.navIcon} />
            <Hidden smDown>
              <Typography variant="h6" component="span" className={s.navListLabel}>
                Главная
              </Typography>
            </Hidden>
          </NavLink>
        </li>
        <li className={s.navListItem}>
          <NavLink to="/explore" className={s.navLink} activeClassName={s.activeLink} exact>
            <SearchIcon className={s.navIcon} />
            <Hidden smDown>
              <Typography variant="h6" component="span" className={s.navListLabel}>
                Поиск
              </Typography>
            </Hidden>
          </NavLink>
        </li>
        <li className={s.navListItem}>
          <NavLink to="/notifications" className={s.navLink} activeClassName={s.activeLink} exact>
            <NotificationsNoneIcon className={s.navIcon} />
            <Hidden smDown>
              <Typography variant="h6" component="span" className={s.navListLabel}>
                Уведомления
              </Typography>
            </Hidden>
          </NavLink>
        </li>
        <li className={s.navListItem}>
          <NavLink to="/messages" className={s.navLink} activeClassName={s.activeLink}>
            <EmailIcon className={s.navIcon} />
            <Hidden smDown>
              <Typography variant="h6" component="span" className={s.navListLabel}>
                Сообщения
              </Typography>
            </Hidden>
          </NavLink>
        </li>
        <li className={s.navListItem}>
          <NavLink to="/bookmarks" className={s.navLink} activeClassName={s.activeLink}>
            <BookmarkBorderIcon className={s.navIcon} />
            <Hidden smDown>
              <Typography variant="h6" component="span" className={s.navListLabel}>
                Закладки
              </Typography>
            </Hidden>
          </NavLink>
        </li>
        <li className={s.navListItem}>
          <NavLink to="/lists" className={s.navLink} activeClassName={s.activeLink}>
            <ListIcon className={s.navIcon} />
            <Hidden smDown>
              <Typography variant="h6" component="span" className={s.navListLabel}>
                Списки
              </Typography>
            </Hidden>
          </NavLink>
        </li>
        <li className={s.navListItem}>
          <NavLink to="/profile" className={s.navLink} activeClassName={s.activeLink}>
            <PermIdentityIcon className={s.navIcon} />
            <Hidden smDown>
              <Typography variant="h6" component="span" className={s.navListLabel}>
                Профиль
              </Typography>
            </Hidden>
          </NavLink>
        </li>
        <li>
          <Button
            className={s.navTweetButton}
            variant="contained"
            color="primary"
            onClick={handleClickOpenAddTweet}
            fullWidth>
            <Hidden smDown>Твитнуть</Hidden>
            <Hidden mdUp>
              <CreateIcon />
            </Hidden>
          </Button>
          <ModalBlock visible={visibleAddTweet} onClose={onCloseAddTweet}>
            <div style={{ width: 550 }}>
              <AddTweetForm rowsMin={4} />
            </div>
          </ModalBlock>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
