import { LoadingStatus } from '../../types';
import { Tweet } from '../tweets/contracts/state';
import {
  IDeleteCommentAction,
  IFetchAddCommentAction,
  IFetchCommentsAction,
  IFetchLikeTweetAction,
  IFetchTweetDataAction,
  ISetAddCommentAction,
  ISetAddCommentLoadingStatusAction,
  ISetCommentsAction,
  ISetCommentsLoadingStatusAction,
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

export const fetchLikeTweet = (id: string, isLiked: boolean): IFetchLikeTweetAction => ({
  type: TweetDataActionsType.FETCH_LIKE_TWEET,
  id,
  isLiked,
});

export const fetchAddComment = (
  tweetId: string,
  text: string,
  images: File[],
): IFetchAddCommentAction => ({
  type: TweetDataActionsType.FETCH_ADD_COMMENT,
  tweetId,
  text,
  images,
});

export const setAddComment = (payload: Tweet): ISetAddCommentAction => ({
  type: TweetDataActionsType.SET_ADD_COMMENT,
  payload,
});

export const setAddCommentLoadingStatus = (
  payload: LoadingStatus,
): ISetAddCommentLoadingStatusAction => ({
  type: TweetDataActionsType.SET_ADD_COMMENT_LOADING_STATE,
  payload,
});

export const fetchComments = (id: string): IFetchCommentsAction => ({
  type: TweetDataActionsType.FETCH_COMMENTS,
  payload: id,
});

export const setComments = (payload: Tweet[]): ISetCommentsAction => ({
  type: TweetDataActionsType.SET_COMMENTS,
  payload,
});

export const setCommentsLoadingStatus = (
  payload: LoadingStatus,
): ISetCommentsLoadingStatusAction => ({
  type: TweetDataActionsType.SET_COMMENTS_LOADING_STATUS,
  payload,
});

export const deleteComment = (id: string): IDeleteCommentAction => ({
  type: TweetDataActionsType.DELETE_COMMENT,
  payload: id,
});
