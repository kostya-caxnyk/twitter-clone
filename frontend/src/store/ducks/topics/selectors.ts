import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { LoadingStatus } from '../../types';

export const selectTopics = (state: RootState) => state.topics;

export const selectTopicsItems = createSelector(selectTopics, (topics) => topics.items);

export const selectIsTopicsLoading = createSelector(
  selectTopics,
  (topics): boolean => topics.LoadingStatus === LoadingStatus.LOADING,
);
