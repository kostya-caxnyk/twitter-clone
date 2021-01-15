import { RootState } from '../../store';
import { LoadingStatus } from '../../types';

export const selectTweet = (state: RootState) => state.tweet;

export const selectTweetData = (state: RootState) => selectTweet(state).data;

export const selectIsTweetDataLoading = (state: RootState) =>
  selectTweet(state).LoadingStatus === LoadingStatus.LOADING;

export const selectIsTweetDataHasError = (state: RootState) =>
  selectTweet(state).LoadingStatus === LoadingStatus.ERROR;

export const selectComments = (state: RootState) => selectTweet(state).comments;

export const selectIsCommentsLoading = (state: RootState) =>
  selectTweet(state).commentsLoadingStatus === LoadingStatus.LOADING;

export const selectIsCommentsError = (state: RootState) =>
  selectTweet(state).commentsLoadingStatus === LoadingStatus.ERROR;

export const selectIsAddCommentLoading = (state: RootState) =>
  selectTweet(state).addCommentStatus === LoadingStatus.LOADING;

export const selectIsAddCommentLoaded = (state: RootState) =>
  selectTweet(state).addCommentStatus === LoadingStatus.LOADED;

export const selectIsAddCommentError = (state: RootState) =>
  selectTweet(state).addCommentStatus === LoadingStatus.ERROR;
