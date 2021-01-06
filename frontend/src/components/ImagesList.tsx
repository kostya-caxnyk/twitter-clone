import React from 'react';
import classnames from 'classnames';

import { ImageData } from '../store/types';
import useHomeStyles from '../pages/HomePage/useHomeStyles';

interface ImagesListProps {
  images: ImageData[];
}

const ImagesList: React.FC<ImagesListProps> = ({ images }) => {
  const s = useHomeStyles();

  return images.length ? (
    <div className={s.tweetImages}>
      {images.map((img) => (
        <div
          key={img.id}
          style={{ backgroundImage: `url("${img.url}")` }}
          className={classnames(s.tweetImage, {
            [s.tweetOneImage]: images.length === 1,
            [s.tweetTwoImage]: images.length > 1,
          })}></div>
      ))}
    </div>
  ) : null;
};

export default ImagesList;
