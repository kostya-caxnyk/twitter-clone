import { LoadingStatus } from '../../types';
import {
  ICheckCurrentUserAction,
  IEditFormData,
  IFetchEditUserDataAction,
  IFetchRegisterUserAction,
  IFetchUserDataAction,
  ILoginFormData,
  IRegisterFormData,
  ISetErrorMsgAction,
  ISetLoadingStatusAction,
  ISetNewFollowingAction,
  ISetNewLikedTweetsAction,
  ISetUserDataAction,
  ISignOutAction,
  UserDataActionsType,
} from './contracts/actionTypes';
import { User } from './contracts/state';

export const setUserData = (payload: User): ISetUserDataAction => ({
  type: UserDataActionsType.SET_USER_DATA,
  payload,
});

export const fetchUserData = (data: ILoginFormData): IFetchUserDataAction => ({
  type: UserDataActionsType.FETCH_USER_DATA,
  payload: data,
});

export const setUserLoadingStatus = (payload: LoadingStatus): ISetLoadingStatusAction => ({
  type: UserDataActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchRegisterUser = (data: IRegisterFormData): IFetchRegisterUserAction => ({
  type: UserDataActionsType.FETCH_REGISTER_USER,
  payload: data,
});

export const checkCurrentUser = (): ICheckCurrentUserAction => ({
  type: UserDataActionsType.CHECK_CURRENT_USER,
});

export const signOut = (): ISignOutAction => ({
  type: UserDataActionsType.SIGN_OUT,
});

export const setNewFollowingArr = (payload: string[]): ISetNewFollowingAction => ({
  type: UserDataActionsType.SET_NEW_FOLLOWING_ARR,
  payload,
});

export const setNewLikedTweetsArr = (payload: string[]): ISetNewLikedTweetsAction => ({
  type: UserDataActionsType.SET_NEW_LIKED_TWEETS_ARR,
  payload,
});

export const fetchEditUserData = (
  data: IEditFormData,
  avatarFile?: File,
  backgroundFile?: File,
): IFetchEditUserDataAction => ({
  type: UserDataActionsType.FETCH_EDIT_USER_DATA,
  payload: {
    ...data,
    avatarFile,
    backgroundFile,
  },
});

export const setErrorMessage = (error: string): ISetErrorMsgAction => ({
  type: UserDataActionsType.SET_ERROR_MESSAGE,
  payload: error,
});
