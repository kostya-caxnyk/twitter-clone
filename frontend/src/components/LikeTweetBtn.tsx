import React from 'react';

import useHomeStyles from '../pages/HomePage/useHomeStyles';
import LikeIcon from '@material-ui/icons/Favorite';
import LikeBorderIcon from '@material-ui/icons/FavoriteBorder';
import { IconButton } from '@material-ui/core';

interface LikeTweetBtnProps {
  handleLike: (e: React.MouseEvent, id: string, isLiked: boolean) => void;
  id: string;
  isLiked: boolean;
}

const LikeTweetBtn: React.FC<LikeTweetBtnProps> = ({ handleLike, isLiked, id }) => {
  const s = useHomeStyles();

  return (
    <IconButton className={s.tweetIcon} onClick={(e) => handleLike(e, id, isLiked)}>
      {isLiked ? <LikeIcon style={{ color: 'rgb(224, 36, 94)' }} /> : <LikeBorderIcon />}
    </IconButton>
  );
};

export default LikeTweetBtn;
