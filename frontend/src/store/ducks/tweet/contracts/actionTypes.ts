import { Action } from 'redux';
import { LoadingStatus } from '../../../types';
import { TweetState } from './state';

export enum TweetDataActionsType {
  'SET_TWEET_DATA' = 'tweet/SET_TWEET_DATA',
  'FETCH_TWEET_DATA' = 'tweet/FETCH_TWEET_DATA',
  'SET_LOADING_STATE' = 'tweet/SET_LOADING_STATE',
  'FETCH_LIKE_TWEET' = 'tweet/FETCH_LIKE_TWEET',
}

export interface ISetTweetDataAction extends Action<TweetDataActionsType> {
  type: TweetDataActionsType.SET_TWEET_DATA;
  payload: TweetState['data'];
}

export interface IFetchTweetDataAction {
  type: TweetDataActionsType.FETCH_TWEET_DATA;
  payload: string;
}

export interface ISetLoadingStatusAction {
  type: TweetDataActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}

export interface IFetchLikeTweetAction {
  type: TweetDataActionsType.FETCH_LIKE_TWEET;
  id: string;
  isLiked: boolean;
}

export type TweetDataActions =
  | ISetTweetDataAction
  | IFetchTweetDataAction
  | ISetLoadingStatusAction;
