import React, { useRef } from 'react';

import ImageIcon from '@material-ui/icons/ImageOutlined';
import { IconButton } from '@material-ui/core';
import useHomeStyles from '../pages/HomePage/useHomeStyles';

interface UploadImageProps {
  onAddFile: (url: string, file: File) => void;
  disabled?: boolean;
  iconEl?: React.ReactElement;
}

const UploadImage: React.FC<UploadImageProps> = React.memo(
  ({ onAddFile, disabled = false, iconEl }): React.ReactElement => {
    const s = useHomeStyles();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClickUploadFile = (): void => {
      if (inputRef.current) {
        inputRef.current.value = '';
        inputRef.current.click();
      }
    };

    const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) {
        return;
      }
      const fileUrl = URL.createObjectURL(new Blob([file]));
      onAddFile(fileUrl, file);
    };

    return (
      <>
        <IconButton
          onClick={handleClickUploadFile}
          className={s.formAddTweetIcon}
          disabled={disabled}>
          {iconEl ? iconEl : <ImageIcon />}
        </IconButton>
        <input
          accept="image/jpeg,image/png,image/webp,image/gif"
          ref={inputRef}
          onChange={onSelectFile}
          type="file"
          tabIndex={-1}
          hidden
        />
      </>
    );
  },
);

export default UploadImage;
