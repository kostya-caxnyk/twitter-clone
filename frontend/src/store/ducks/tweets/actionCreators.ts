import { LoadingStatus } from '../../types';
import {
  IAddCommentToTweetAction,
  IAddTweetAction,
  IDeleteTweetAction,
  IFetchAddTweetAction,
  IFetchDeleteTweetAction,
  IFetchTweetsAction,
  ISetAddFormStateAction,
  ISetDeleteTweetStateAction,
  ISetLoadingStatusAction,
  ISetTweetsAction,
  TweetsActionsType,
} from './contracts/actionTypes';
import { Tweet, AddFormState, DeleteTweetState } from './contracts/state';

export const setTweets = (payload: Tweet[]): ISetTweetsAction => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});

export const fetchTweets = (username?: string): IFetchTweetsAction => ({
  type: TweetsActionsType.FETCH_TWEETS,
  payload: username,
});

export const setTweetsLoadingStatus = (payload: LoadingStatus): ISetLoadingStatusAction => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
});

export const setAddFormState = (payload: AddFormState): ISetAddFormStateAction => ({
  type: TweetsActionsType.SET_ADD_FORM_STATE,
  payload,
});

export const fetchAddTweet = (text: string, files: File[]): IFetchAddTweetAction => ({
  type: TweetsActionsType.FETCH_ADD_TWEET,
  payload: {
    text,
    files,
  },
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

export const setDeleteTweetState = (payload: DeleteTweetState): ISetDeleteTweetStateAction => ({
  type: TweetsActionsType.SET_DELETE_TWEET_STATE,
  payload,
});

export const addCommentToTweet = (payload: Tweet): IAddCommentToTweetAction => ({
  type: TweetsActionsType.ADD_COMMENT_TO_TWEET,
  payload,
});
