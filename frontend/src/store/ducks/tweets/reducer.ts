import { TweetsState, AddFormState, DeleteState } from './contracts/state';
import produce, { Draft } from 'immer';
import { TweetsActions, TweetsActionsType } from './contracts/actionTypes';
import { LoadingStatus } from '../../types';

const initialTweetsState: TweetsState = {
  items: [],
  LoadingStatus: LoadingStatus.NEVER,
  addFormState: AddFormState.NEVER,
  deleteTweetState: DeleteState.NEVER,
};

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
  switch (action.type) {
    case TweetsActionsType.SET_TWEETS:
      draft.items = action.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;

    case TweetsActionsType.FETCH_TWEETS:
      draft.items = [];
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;

    case TweetsActionsType.SET_LOADING_STATE:
      draft.LoadingStatus = action.payload;
      break;

    case TweetsActionsType.SET_ADD_FORM_STATE:
      draft.addFormState = action.payload;
      break;

    case TweetsActionsType.FETCH_ADD_TWEET:
      draft.addFormState = AddFormState.LOADING;
      break;

    case TweetsActionsType.ADD_TWEET:
      draft.addFormState = AddFormState.NEVER;
      draft.items.unshift(action.payload);
      break;

    case TweetsActionsType.FETCH_DELETE_TWEET:
      draft.deleteTweetState = DeleteState.LOADING;
      break;

    case TweetsActionsType.DELETE_TWEET:
      draft.deleteTweetState = DeleteState.NEVER;
      const idx = draft.items.findIndex((tweet) => tweet._id === action.payload);
      draft.items.splice(idx, 1);
      break;
  }
}, initialTweetsState);
