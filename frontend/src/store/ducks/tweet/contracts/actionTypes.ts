import { Action } from 'redux';
import { LoadingState, TweetState } from './state';

export enum TweetDataActionsType {
  'SET_TWEET_DATA' = 'tweet/SET_TWEET_DATA',
  'FETCH_TWEET_DATA' = 'tweet/FETCH_TWEET_DATA',
  'SET_LOADING_STATE' = 'tweet/SET_LOADING_STATE',
}

export interface ISetTweetDataAction extends Action<TweetDataActionsType> {
  type: TweetDataActionsType.SET_TWEET_DATA;
  payload: TweetState['data'];
}

export interface IFetchTweetDataAction {
  type: TweetDataActionsType.FETCH_TWEET_DATA;
  payload: string;
}

export interface ISetLoadingStateAction {
  type: TweetDataActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export type TweetDataActions = ISetTweetDataAction | IFetchTweetDataAction | ISetLoadingStateAction;
