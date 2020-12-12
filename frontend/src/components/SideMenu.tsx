import React from 'react';
import { NavLink } from 'react-router-dom';

import { IconButton } from '@material-ui/core';
import { useHomeStyles } from '../pages/Home';
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

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
}

const SideMenu: React.FC<SideMenuProps> = ({ classes: s }) => {
  return (
    <nav className={s.navSideBar}>
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
          <NavLink to="/notifications" className={s.navLink} activeClassName={s.activeLink} exact>
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
        <li>
          <Button className={s.navTweetButton} variant="contained" color="primary" fullWidth>
            Твитнуть
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
