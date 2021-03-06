import produce, { Draft } from 'immer';
import { LoadingStatus } from '../../types';
import { UserDataActions, UserDataActionsType } from './contracts/actionTypes';
import { UserState } from './contracts/state';

const initialUserDataState: UserState = {
  data: null,
  errorMsg: null,
  LoadingStatus: LoadingStatus.NEVER,
};

export const userReducer = produce((draft: Draft<UserState>, action: UserDataActions) => {
  switch (action.type) {
    case UserDataActionsType.SET_USER_DATA:
      draft.data = action.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;

    case UserDataActionsType.FETCH_USER_DATA:
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;

    case UserDataActionsType.SET_LOADING_STATE:
      draft.LoadingStatus = action.payload;
      break;

    case UserDataActionsType.CHECK_CURRENT_USER:
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;

    case UserDataActionsType.SIGN_OUT:
      draft.LoadingStatus = LoadingStatus.LOADED;
      draft.data = null;
      break;

    case UserDataActionsType.SET_NEW_FOLLOWING_ARR:
      if (draft.data) {
        draft.data.following = action.payload;
      }
      break;

    case UserDataActionsType.SET_NEW_LIKED_TWEETS_ARR:
      if (draft.data) {
        draft.data.likedTweets = action.payload;
      }
      break;

    case UserDataActionsType.SET_ERROR_MESSAGE:
      draft.errorMsg = action.payload;
      draft.LoadingStatus = LoadingStatus.ERROR;
      break;
  }
}, initialUserDataState);
