import React from 'react';

import { Button } from '@material-ui/core';

interface FollowUserBtnProps {
  isFollowing: boolean;
  onClickFollowUser: (e: React.MouseEvent, id: string, isFollowing: boolean) => void;
  userId: string;
  big?: boolean;
}

const FollowUserBtn: React.FC<FollowUserBtnProps> = ({
  isFollowing,
  userId,
  onClickFollowUser,
  big = false,
}) => {
  return (
    <Button
      onClick={(e) => onClickFollowUser(e, userId, isFollowing)}
      color="primary"
      variant={isFollowing ? 'contained' : 'outlined'}
      style={{ padding: '0px 10px', height: big ? 40 : 30 }}>
      {isFollowing ? 'Читаемые' : 'Читать'}
    </Button>
  );
};

export default FollowUserBtn;
