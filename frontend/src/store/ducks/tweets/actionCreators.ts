import {
  IAddTweetAction,
  IDeleteTweetAction,
  IFetchAddTweetAction,
  IFetchDeleteTweetAction,
  IFetchTweetsAction,
  ISetAddFormStateAction,
  ISetLoadingStateAction,
  ISetTweetsAction,
  TweetsActionsType,
} from './contracts/actionTypes';
import { Tweet, LoadingState, AddFormState } from './contracts/state';

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

export const setAddFormState = (payload: AddFormState): ISetAddFormStateAction => ({
  type: TweetsActionsType.SET_ADD_FORM_STATE,
  payload,
});

export const fetchAddTweet = (payload: string): IFetchAddTweetAction => ({
  type: TweetsActionsType.FETCH_ADD_TWEET,
  payload,
});

export const addTweet = (payload: Tweet): IAddTweetAction => ({
  type: TweetsActionsType.ADD_TWEET,
  payload,
});

export const fetchDeleteTweet = (id: string): IFetchDeleteTweetAction => ({
  type: TweetsActionsType.FETCH_DELETE_TWEET,
  payload: id,
});

export const deleteTweet = (id: string): IDeleteTweetAction => ({
  type: TweetsActionsType.DELETE_TWEET,
  payload: id,
});
