import { Action } from 'redux';
import { Tweet } from './contracts/state';

export enum TweetsActionsType {
  'SET_TWEETS' = 'tweets/SET_TWEETS',
  'FETCH_TWEETS' = 'tweets/FETCH_TWEETS',
}

export interface ISetTweetsAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS;
  payload: Tweet[];
}

export interface IFetchTweetsAction {
  type: TweetsActionsType.FETCH_TWEETS;
}

export const setTweets = (payload: Tweet[]): ISetTweetsAction => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});

export const fetchTweets = (): IFetchTweetsAction => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export type TweetsActions = ISetTweetsAction | IFetchTweetsAction;
