import { TweetsState, LoadingState } from './contracts/state';
import produce, { Draft } from 'immer';
import { TweetsActions, TweetsActionsType } from './actionCreators';

const initialTweetsState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
  switch (action.type) {
    case TweetsActionsType.SET_TWEETS:
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;
    case TweetsActionsType.FETCH_TWEETS:
  }
}, initialTweetsState);