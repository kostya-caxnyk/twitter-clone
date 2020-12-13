import React from 'react';
import classnames from 'classnames';

import { Avatar, Button, IconButton } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { TextareaAutosize } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/ImageOutlined';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';

import useHomeStyles from '../pages/Home/useHomeStyles';

const MAX_INPUT_LENGTH = 280;

const AddTweetForm = (): React.ReactElement => {
  const s = useHomeStyles();

  const [textValue, setTextValue] = React.useState('');

  const progressBarPercent = Math.round(textValue.length / 2.8);
  const hasReachedLimit = textValue.length > MAX_INPUT_LENGTH;
  const symbolsCount = MAX_INPUT_LENGTH - textValue.length;

  const handleTextAreaChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    setTextValue(e.currentTarget.value);
  };

  const handleClickAddTweet = (): void => {
    setTextValue('');
  };

  return (
    <Paper className={s.formAddTweet}>
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
        />
        <div className={s.formAddTweetButtons}>
          <div className={s.formAddTweetButtonsGroup}>
            <IconButton className={s.formAddTweetIcon}>
              <ImageIcon />
            </IconButton>
            <IconButton className={s.formAddTweetIcon}>
              <SentimentSatisfiedIcon />
            </IconButton>
          </div>
          {textValue && (
            <div className={s.formAddTweetProgressBar}>
              {hasReachedLimit && <span className={s.formAddTweetLimit}>{symbolsCount}</span>}
              <CircularProgress
                variant="static"
                value={progressBarPercent > 100 ? 100 : progressBarPercent}
                size={25}
                className={classnames({ [s.redColor]: hasReachedLimit })}
              />
              <CircularProgress
                variant="static"
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
      </div>
    </Paper>
  );
};

export default AddTweetForm;
