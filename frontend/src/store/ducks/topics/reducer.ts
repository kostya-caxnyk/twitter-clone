import { TopicsState } from './contracts/state';
import produce, { Draft } from 'immer';
import { TopicsActions, TopicsActionsType } from './actionCreators';
import { LoadingStatus } from '../../types';

const initialTopicsState: TopicsState = {
  items: [],
  LoadingStatus: LoadingStatus.NEVER,
};

export const topicsReducer = produce((draft: Draft<TopicsState>, action: TopicsActions) => {
  switch (action.type) {
    case TopicsActionsType.SET_TOPICS:
      draft.items = action.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;

    case TopicsActionsType.FETCH_TOPICS:
      draft.items = [];
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;

    case TopicsActionsType.SET_LOADING_STATE:
      draft.LoadingStatus = action.payload;
      break;
  }
}, initialTopicsState);
