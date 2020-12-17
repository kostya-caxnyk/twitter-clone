import { Action } from 'redux';
import { Tweet, LoadingState } from './contracts/state';

export enum TweetsActionsType {
  'SET_TWEETS' = 'tweets/SET_TWEETS',
  'FETCH_TWEETS' = 'tweets/FETCH_TWEETS',
  'ADD_TWEET' = 'tweets/ADD_TWEET',
  'SET_LOADING_STATE' = 'tweets/SET_LOADING_STATE',
}

export interface ISetTweetsAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS;
  payload: Tweet[];
}

export interface IFetchTweetsAction {
  type: TweetsActionsType.FETCH_TWEETS;
}

export interface ISetLoadingStateAction {
  type: TweetsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface IAddTweetAction {
  type: TweetsActionsType.ADD_TWEET;
  payload: Tweet;
}

export const setTweets = (payload: Tweet[]): ISetTweetsAction => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});

export const fetchTweets = (): IFetchTweetsAction => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export const setTweetsLoadingState = (payload: LoadingState): ISetLoadingStateAction => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
});

export const addTweet = (payload: Tweet): IAddTweetAction => ({
  type: TweetsActionsType.ADD_TWEET,
  payload,
});

export type TweetsActions = ISetTweetsAction | IFetchTweetsAction | ISetLoadingStateAction;
