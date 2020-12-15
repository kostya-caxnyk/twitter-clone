import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { LoadingState } from './contracts/state';

export const selectTweets = (state: RootState) => state.tweets;

export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items);

export const selectIsTweetsLoading = createSelector(
  selectTweets,
  (tweets): boolean => tweets.loadingState === LoadingState.LOADING,
);
