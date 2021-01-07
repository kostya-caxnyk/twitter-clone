import {
  Avatar,
  Fab,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useHomeStyles from '../pages/HomePage/useHomeStyles';
import { selectUserData } from '../store/ducks/user/selectors';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import { signOut } from '../store/ducks/user/actionCreators';

const ProfileBtn: React.FC = () => {
  const s = useHomeStyles();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUserData);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpenMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    dispatch(signOut());
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div style={{ position: 'sticky', top: '93vh' }}>
      <Fab variant="extended" className={s.profileBtn} onClick={handleOpenMenuClick} disableRipple>
        <Avatar alt="" src={currentUser.avatarUrl} />
        <div className={s.profileBtnInfo}>
          <Typography variant="inherit">
            <strong>{currentUser.name}</strong>
          </Typography>
          <Typography align="left">@{currentUser.username}</Typography>
        </div>
        <MoreIcon className={s.profileBtnMoreIcon} />
      </Fab>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        className={s.profileBtnMenu}
        keepMounted>
        <MenuItem className={s.recomItem} style={{ cursor: 'default', pointerEvents: 'none' }}>
          <ListItemAvatar>
            <Avatar
              alt={currentUser.name}
              src={currentUser.avatarUrl}
              className={s.recomItemAvatar}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography className={s.recomItemTitle}>{currentUser.name}</Typography>}
            secondary={<Typography className={s.recomItemText}>@{currentUser.username}</Typography>}
          />
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
          <ListItemText primary={`Выйти из учетной записи @${currentUser.username}`} />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileBtn;
