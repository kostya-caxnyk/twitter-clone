import React from 'react';

import { Button, Typography } from '@material-ui/core';
import { User } from '../../../store/ducks/user/contracts/state';
import { formatMonthAndYear } from '../../../utils/formatDate';
import useHomeStyles from '../../HomePage/useHomeStyles';
import RoomIcon from '@material-ui/icons/RoomOutlined';
import DateRangeIcon from '@material-ui/icons/DateRangeOutlined';
import FollowUserBtn from '../../../components/FollowUserBtn';
import { fetchFollowUser } from '../../../store/ducks/users/actionCreators';
import { useDispatch } from 'react-redux';

interface ProfileUserInfoProps {
  user: User;
  currentUser: User | null;
}

const ProfileUserInfo: React.FC<ProfileUserInfoProps> = ({ user, currentUser }) => {
  const s = useHomeStyles();
  const dispatch = useDispatch();

  const onClickFollowUser = (event: React.MouseEvent, id: string, isFollowing: boolean) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(fetchFollowUser({ id, isFollowing }));
  };

  const isFollowing = !!currentUser?.following.includes(user._id);
  const actionButton =
    currentUser?._id !== user._id ? (
      <FollowUserBtn
        isFollowing={isFollowing}
        onClickFollowUser={onClickFollowUser}
        userId={user._id}
        big
      />
    ) : (
      <Button variant="outlined" color="primary">
        Изменить профиль
      </Button>
    );

  return (
    <>
      <div className={s.profileBackground} />
      <div className={s.profileBlock}>
        <div className={s.profileMeta}>
          <div className={s.profileAvatar}>
            <img src={user.avatarUrl} alt={user.name} />
          </div>
          {currentUser && actionButton}
        </div>
        <div className={s.profileInfo}>
          <div style={{ marginBottom: 10 }}>
            <Typography variant="h6" style={{ fontSize: 19, fontWeight: 800 }}>
              {user.name}
            </Typography>
            <Typography variant="subtitle1" className={s.profileLabel}>
              @{user.username}
            </Typography>
          </div>
          {!!user.about && <Typography className={s.profileAbout}>{user.about}</Typography>}
          <div className={s.profileDetails}>
            {!!user.location && (
              <Typography className={s.profileLabel}>
                <RoomIcon />
                {user.location}
              </Typography>
            )}
            <Typography className={s.profileLabel}>
              <DateRangeIcon />
              Регистрация: {formatMonthAndYear(user.createdAt)}
            </Typography>
          </div>
          <div style={{ marginBottom: 10, fontSize: 15 }}>
            <span className={s.profileLink}>
              <b>{user.following.length}</b> в читаемых
            </span>
            <span className={s.profileLink}>
              <b>{user.followers.length}</b> читателей
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUserInfo;
