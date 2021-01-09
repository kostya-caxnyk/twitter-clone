import produce, { Draft } from 'immer';
import { LoadingStatus } from '../../types';
import { UsersActions, UsersActionsType } from './contracts/actionTypes';
import { UsersState } from './contracts/state';

const initialUsersState: UsersState = {
  items: null,
  LoadingStatus: LoadingStatus.NEVER,
};

export const usersReducer = produce((draft: Draft<UsersState>, action: UsersActions) => {
  switch (action.type) {
    case UsersActionsType.SET_ITEMS:
      draft.items = action.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;

    case UsersActionsType.FETCH_ITEMS:
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;

    case UsersActionsType.SET_LOADING_STATE:
      draft.LoadingStatus = action.payload;
      break;
  }
}, initialUsersState);
