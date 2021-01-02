import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { LoadingStatus } from '../../types';
import { AddFormState } from './contracts/state';

export const selectTweets = (state: RootState) => state.tweets;

export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items);

export const selectIsTweetsLoading = createSelector(
  selectTweets,
  (tweets): boolean => tweets.LoadingStatus === LoadingStatus.LOADING,
);

export const selectAddFormState = (state: RootState) => state.tweets.addFormState;

export const selectIsAddFormStateLoading = (state: RootState) =>
  selectTweets(state).addFormState === AddFormState.LOADING;

export const selectIsAddFormStateError = (state: RootState) =>
  selectTweets(state).addFormState === AddFormState.ERROR;
