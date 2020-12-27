import { Action } from 'redux';
import { AddFormState, LoadingState, Tweet } from './state';

export enum TweetsActionsType {
  'SET_TWEETS' = 'tweets/SET_TWEETS',
  'FETCH_TWEETS' = 'tweets/FETCH_TWEETS',
  'ADD_TWEET' = 'tweets/ADD_TWEET',
  'FETCH_ADD_TWEET' = 'tweets/FETCH_ADD_TWEET',
  'FETCH_DELETE_TWEET' = 'tweets/FETCH_DELETE_TWEET',
  'DELETE_TWEET' = 'tweets/DELETE_TWEET',
  'SET_LOADING_STATE' = 'tweets/SET_LOADING_STATE',
  'SET_ADD_FORM_STATE' = 'tweets/SET_ADD_FORM_STATE',
}

export type TweetsActions =
  | ISetTweetsAction
  | IFetchTweetsAction
  | ISetLoadingStateAction
  | IAddTweetAction
  | IFetchAddTweetAction
  | ISetAddFormStateAction
  | IFetchDeleteTweetAction
  | IDeleteTweetAction;

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

export interface ISetAddFormStateAction {
  type: TweetsActionsType.SET_ADD_FORM_STATE;
  payload: AddFormState;
}

export interface IFetchAddTweetAction {
  type: TweetsActionsType.FETCH_ADD_TWEET;
  payload: string;
}

export interface IAddTweetAction {
  type: TweetsActionsType.ADD_TWEET;
  payload: Tweet;
}

export interface IFetchDeleteTweetAction {
  type: TweetsActionsType.FETCH_DELETE_TWEET;
  payload: string;
}

export interface IDeleteTweetAction {
  type: TweetsActionsType.DELETE_TWEET;
  payload: string;
}
