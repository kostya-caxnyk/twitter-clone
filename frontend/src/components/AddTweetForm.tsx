import React, { useEffect } from 'react';
import classnames from 'classnames';

import { Avatar, Button, IconButton } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { TextareaAutosize } from '@material-ui/core';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';

import useHomeStyles from '../pages/Home/useHomeStyles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddTweet } from '../store/ducks/tweets/actionCreators';
import {
  selectIsAddFormStateError,
  selectIsAddFormStateLoading,
  selectIsAddTweetLoaded,
} from '../store/ducks/tweets/selectors';
import UploadImage from './UploadImage';

const MAX_INPUT_LENGTH = 280;

interface AddTweetFormProps {
  rowsMin?: number;
}

const AddTweetForm: React.FC<AddTweetFormProps> = ({ rowsMin = 1 }): React.ReactElement => {
  const s = useHomeStyles();
  const dispatch = useDispatch();
  const hasError = useSelector(selectIsAddFormStateError);
  const isLoading = useSelector(selectIsAddFormStateLoading);
  const isLoaded = useSelector(selectIsAddTweetLoaded);
  const [textValue, setTextValue] = React.useState('');

  const progressBarPercent = Math.round(textValue.length / 2.8);
  const hasReachedLimit = textValue.length > MAX_INPUT_LENGTH;
  const symbolsCount = MAX_INPUT_LENGTH - textValue.length;

  const handleTextAreaChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (isLoading) {
      return;
    }
    setTextValue(e.currentTarget.value);
  };

  const handleClickAddTweet = (): void => {
    dispatch(fetchAddTweet(textValue));
  };

  useEffect(() => {
    if (isLoaded) {
      setTextValue('');
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
        <Avatar
          alt="Remy Sharp"
          src="https://i.stack.imgur.com/gBMMe.png?s=328&g=1"
          className={s.formAddTweetAvatar}
        />
        <div style={{ width: '100%', height: '100%' }}>
          <TextareaAutosize
            placeholder="Что происходит?"
            className={s.formAddTweetTextArea}
            onChange={handleTextAreaChange}
            value={textValue}
            rowsMin={rowsMin}
          />
          {!isLoading && (
            <div className={s.formAddTweetButtons}>
              <div className={s.formAddTweetButtonsGroup}>
                <UploadImage />
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
                disabled={hasReachedLimit || !textValue}
                variant="contained"
                color="primary"
                onClick={handleClickAddTweet}>
                Твитнуть
              </Button>
            </div>
          )}
        </div>
      </div>
    </Paper>
  );
};

export default AddTweetForm;
