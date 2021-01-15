import React, { useEffect } from 'react';
import classnames from 'classnames';

import { Avatar, Button, IconButton } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { TextareaAutosize } from '@material-ui/core';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import CancelIcon from '@material-ui/icons/Cancel';

import useHomeStyles from '../pages/HomePage/useHomeStyles';
import { useSelector } from 'react-redux';
import { selectIsAddFormStateError } from '../store/ducks/tweets/selectors';
import UploadImage from './UploadImage';
import { selectUserData } from '../store/ducks/user/selectors';

const MAX_INPUT_LENGTH = 280;

interface AddTweetFormProps {
  rowsMin?: number;
  placeholder?: string;
  btnLabel?: string;
  onAddTweet: (text: string, images: File[]) => void;
  isLoading?: boolean;
  isLoaded?: boolean;
}

export interface FileData {
  file: File;
  url: string;
}

const AddTweetForm: React.FC<AddTweetFormProps> = ({
  rowsMin = 1,
  btnLabel,
  placeholder,
  onAddTweet,
  isLoading = false,
  isLoaded = false,
}): React.ReactElement => {
  const s = useHomeStyles();
  const hasError = useSelector(selectIsAddFormStateError);
  const currentUser = useSelector(selectUserData);
  const [textValue, setTextValue] = React.useState('');
  const [imageUrls, setImageUrls] = React.useState<FileData[]>([]);

  const progressBarPercent = Math.round(textValue.length / 2.8);
  const hasReachedLimit = textValue.length > MAX_INPUT_LENGTH;
  const symbolsCount = MAX_INPUT_LENGTH - textValue.length;

  const handleTextAreaChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (isLoading) {
      return;
    }
    setTextValue(e.currentTarget.value);
  };

  const handleClickAddTweet = () => {
    const images = imageUrls.map((obj) => obj.file);
    onAddTweet(textValue, images);
  };

  const onSelectFile = React.useCallback((url: string, file: File): void => {
    setImageUrls((prev) => [...prev, { file, url }]);
  }, []);

  const removeSelectedFile = (index: number) => {
    setImageUrls((prev) => prev.filter((_, idx) => idx !== index));
  };

  useEffect(() => {
    if (isLoaded) {
      setTextValue('');
      setImageUrls([]);
    }
  }, [isLoaded]);

  return (
    <Paper className={classnames({ [s.lowOpacity]: isLoading })}>
      {hasError && (
        <div className={s.formAddTweetErrorWrapper}>
          <div className={s.formAddTweetErrorBlock}>
            Что-то пошло не так, но не беспокойтесь — давайте попробуем еще раз.
          </div>
        </div>
      )}
      <div className={s.formAddTweet}>
        <Avatar alt="Remy Sharp" src={currentUser?.avatarUrl} className={s.formAddTweetAvatar} />
        <div style={{ width: '100%', height: '100%' }}>
          <TextareaAutosize
            placeholder={placeholder ?? 'Что происходит?'}
            className={s.formAddTweetTextArea}
            onChange={handleTextAreaChange}
            value={textValue}
            rowsMin={rowsMin}
          />
          {!isLoading && (
            <div className={s.formAddTweetButtons}>
              <div className={s.formAddTweetButtonsGroup}>
                <UploadImage onAddFile={onSelectFile} disabled={imageUrls.length >= 4} />
                <IconButton className={s.formAddTweetIcon}>
                  <SentimentSatisfiedIcon />
                </IconButton>
              </div>
              {textValue && (
                <div className={s.formAddTweetProgressBar}>
                  {hasReachedLimit && <span className={s.formAddTweetLimit}>{symbolsCount}</span>}
                  <CircularProgress
                    variant="determinate"
                    value={progressBarPercent > 100 ? 100 : progressBarPercent}
                    size={25}
                    className={classnames({ [s.redColor]: hasReachedLimit })}
                  />
                  <CircularProgress
                    variant="determinate"
                    value={100}
                    size={25}
                    className={s.formAddTweetCircle}
                  />
                </div>
              )}
              <Button
                disabled={hasReachedLimit || (!textValue && !imageUrls.length)}
                variant="contained"
                color="primary"
                onClick={handleClickAddTweet}>
                {btnLabel ?? 'Твитнуть'}
              </Button>
            </div>
          )}
          {!!imageUrls.length && (
            <div className={s.formAddTweetImages}>
              {imageUrls.map(({ url }, idx) => (
                <div className={s.formAddTweetImage} key={url + idx}>
                  <IconButton
                    className={s.formAddTweetCancelIcon}
                    onClick={() => removeSelectedFile(idx)}
                    disabled={isLoading}>
                    <CancelIcon />
                  </IconButton>
                  <img src={url} alt="wtf" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Paper square className={s.gap} variant="outlined" />
    </Paper>
  );
};

export default AddTweetForm;
