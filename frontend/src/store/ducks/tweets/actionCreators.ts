import { Action } from 'redux';
import { Tweet, LoadingState } from './contracts/state';

export enum TweetsActionsType {
  'SET_TWEETS' = 'tweets/SET_TWEETS',
  'FETCH_TWEETS' = 'tweets/FETCH_TWEETS',
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

export type TweetsActions = ISetTweetsAction | IFetchTweetsAction | ISetLoadingStateAction;
