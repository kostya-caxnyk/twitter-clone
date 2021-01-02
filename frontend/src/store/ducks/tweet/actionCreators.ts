import { LoadingStatus } from '../../types';
import {
  IFetchTweetDataAction,
  ISetLoadingStatusAction,
  ISetTweetDataAction,
  TweetDataActionsType,
} from './contracts/actionTypes';
import { TweetState } from './contracts/state';

export const setTweetData = (payload: TweetState['data']): ISetTweetDataAction => ({
  type: TweetDataActionsType.SET_TWEET_DATA,
  payload,
});

export const fetchTweetData = (id: string): IFetchTweetDataAction => ({
  type: TweetDataActionsType.FETCH_TWEET_DATA,
  payload: id,
});

export const setTweetDataLoadingStatus = (payload: LoadingStatus): ISetLoadingStatusAction => ({
  type: TweetDataActionsType.SET_LOADING_STATE,
  payload,
});
