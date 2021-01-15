import { Action } from 'redux';
import { LoadingStatus } from '../../../types';
import { Tweet } from '../../tweets/contracts/state';
import { TweetState } from './state';

export enum TweetDataActionsType {
  'SET_TWEET_DATA' = 'tweet/SET_TWEET_DATA',
  'FETCH_TWEET_DATA' = 'tweet/FETCH_TWEET_DATA',
  'SET_LOADING_STATE' = 'tweet/SET_LOADING_STATE',
  'FETCH_LIKE_TWEET' = 'tweet/FETCH_LIKE_TWEET',
  'FETCH_ADD_COMMENT' = 'tweet/FETCH_ADD_COMMENT',
  'SET_ADD_COMMENT' = 'tweet/SET_ADD_COMMENT',
  'SET_ADD_COMMENT_LOADING_STATE' = 'tweet/SET_ADD_COMMENT_LOADING_STATE',
  'FETCH_COMMENTS' = 'tweet/FETCH_COMMENTS',
  'SET_COMMENTS' = 'tweet/SET_COMMENTS',
  'SET_COMMENTS_LOADING_STATUS' = 'tweet/SET_COMMENTS_LOADING_STATUS',
  'DELETE_COMMENT' = 'tweet/DELETE_COMMENT',
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

export interface IFetchAddCommentAction {
  type: TweetDataActionsType.FETCH_ADD_COMMENT;
  tweetId: string;
  text: string;
  images: File[];
}

export interface ISetAddCommentAction {
  type: TweetDataActionsType.SET_ADD_COMMENT;
  payload: Tweet;
}

export interface ISetAddCommentLoadingStatusAction {
  type: TweetDataActionsType.SET_ADD_COMMENT_LOADING_STATE;
  payload: LoadingStatus;
}

export interface ISetCommentsLoadingStatusAction {
  type: TweetDataActionsType.SET_COMMENTS_LOADING_STATUS;
  payload: LoadingStatus;
}

export interface ISetCommentsAction {
  type: TweetDataActionsType.SET_COMMENTS;
  payload: Tweet[];
}

export interface IFetchCommentsAction {
  type: TweetDataActionsType.FETCH_COMMENTS;
  payload: string;
}

export interface IDeleteCommentAction {
  type: TweetDataActionsType.DELETE_COMMENT;
  payload: string;
}

export type TweetDataActions =
  | ISetTweetDataAction
  | IFetchTweetDataAction
  | ISetLoadingStatusAction
  | ISetCommentsLoadingStatusAction
  | ISetCommentsAction
  | ISetAddCommentAction
  | ISetAddCommentLoadingStatusAction
  | IDeleteCommentAction;
