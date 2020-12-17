import { RootState } from '../../store';
import { LoadingState } from './contracts/state';

export const selectTweet = (state: RootState) => state.tweet;

export const selectTweetData = (state: RootState) => selectTweet(state).data;

export const selectIsTweetDataLoading = (state: RootState) =>
  selectTweet(state).loadingState === LoadingState.LOADING;
