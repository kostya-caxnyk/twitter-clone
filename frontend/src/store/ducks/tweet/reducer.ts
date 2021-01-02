import produce, { Draft } from 'immer';
import { LoadingStatus } from '../../types';
import { TweetDataActions, TweetDataActionsType } from './contracts/actionTypes';
import { TweetState } from './contracts/state';

const initialTweetDataState: TweetState = {
  data: null,
  LoadingStatus: LoadingStatus.NEVER,
};

export const tweetReducer = produce((draft: Draft<TweetState>, action: TweetDataActions) => {
  switch (action.type) {
    case TweetDataActionsType.SET_TWEET_DATA:
      draft.data = action.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;

    case TweetDataActionsType.FETCH_TWEET_DATA:
      draft.data = null;
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;

    case TweetDataActionsType.SET_LOADING_STATE:
      draft.LoadingStatus = action.payload;
      break;
  }
}, initialTweetDataState);
