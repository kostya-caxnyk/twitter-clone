import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { LoadingState } from './contracts/state';

export const selectTopics = (state: RootState) => state.topics;

export const selectTopicsItems = createSelector(selectTopics, (topics) => topics.items);

export const selectIsTopicsLoading = createSelector(
  selectTopics,
  (topics): boolean => topics.loadingState === LoadingState.LOADING,
);
