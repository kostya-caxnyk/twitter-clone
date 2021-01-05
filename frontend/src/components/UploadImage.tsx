import React, { useRef } from 'react';

import ImageIcon from '@material-ui/icons/ImageOutlined';
import { IconButton } from '@material-ui/core';
import useHomeStyles from '../pages/Home/useHomeStyles';

const UploadImage = () => {
  const s = useHomeStyles();
  const [imageUrls, setImageUrls] = React.useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickUploadFile = (): void => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    const fileUrl = URL.createObjectURL(new Blob([file]));
    setImageUrls((prev) => [...prev, fileUrl]);
  };
  console.log(imageUrls);
  return (
    <>
      <IconButton onClick={handleClickUploadFile} className={s.formAddTweetIcon}>
        <ImageIcon />
      </IconButton>
      <input ref={inputRef} onChange={onSelectFile} type="file" hidden />
      {imageUrls.map((url, idx) => (
        <img key={idx} src={url} alt="wtf" />
      ))}
    </>
  );
};

export default UploadImage;
