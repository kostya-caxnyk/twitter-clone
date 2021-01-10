import { Action } from 'redux';
import { LoadingStatus } from '../../../types';
import { User } from './state';

export enum UserDataActionsType {
  'SET_USER_DATA' = 'user/SET_USER_DATA',
  'FETCH_USER_DATA' = 'user/FETCH_USER_DATA',
  'SET_LOADING_STATE' = 'user/SET_LOADING_STATE',
  'FETCH_REGISTER_USER' = 'user/FETCH_REGISTER_USER',
  'CHECK_CURRENT_USER' = 'user/CHECK_CURRENT_USER',
  'FETCH_USER_TWEETS' = 'user/FETCH_USER_TWEETS',
  'SIGN_OUT' = 'user/SIGN_OUT',
  'SET_NEW_FOLLOWING_ARR' = 'user/SET_NEW_FOLLOWING_ARR',
}

export interface ISetUserDataAction extends Action<UserDataActionsType> {
  type: UserDataActionsType.SET_USER_DATA;
  payload: User;
}

export interface ILoginFormData {
  email: string;
  password: string;
}

export interface IRegisterFormData {
  email: string;
  name: string;
  username: string;
  password: string;
  password2: string;
}
export interface IFetchUserDataAction {
  type: UserDataActionsType.FETCH_USER_DATA;
  payload: ILoginFormData;
}

export interface IFetchRegisterUserAction {
  type: UserDataActionsType.FETCH_REGISTER_USER;
  payload: IRegisterFormData;
}
export interface ISetLoadingStatusAction {
  type: UserDataActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}

export interface IFetchUserTweetsAction {
  type: UserDataActionsType.FETCH_USER_TWEETS;
  payload: string;
}

export interface ICheckCurrentUserAction {
  type: UserDataActionsType.CHECK_CURRENT_USER;
}

export interface ISignOutAction {
  type: UserDataActionsType.SIGN_OUT;
}

export interface ISetNewFollowingAction {
  type: UserDataActionsType.SET_NEW_FOLLOWING_ARR;
  payload: string[];
}

export type UserDataActions =
  | ISetUserDataAction
  | IFetchUserDataAction
  | ISetLoadingStatusAction
  | ICheckCurrentUserAction
  | ISignOutAction
  | IFetchUserTweetsAction
  | ISetNewFollowingAction;
