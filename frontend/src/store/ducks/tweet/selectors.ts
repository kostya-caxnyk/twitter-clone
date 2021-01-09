import { RootState } from '../../store';
import { LoadingStatus } from '../../types';

export const selectTweet = (state: RootState) => state.tweet;

export const selectTweetData = (state: RootState) => selectTweet(state).data;

export const selectIsTweetDataLoading = (state: RootState) =>
  selectTweet(state).LoadingStatus === LoadingStatus.LOADING;

export const selectIsTweetDataHasError = (state: RootState) =>
  selectTweet(state).LoadingStatus === LoadingStatus.ERROR;
