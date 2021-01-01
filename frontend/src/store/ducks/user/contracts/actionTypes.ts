import { LoginFormData } from './../../../../pages/AuthPage/components/LoginModal';
import { Action } from 'redux';
import { LoadingState, UserState } from './state';

export enum UserDataActionsType {
  'SET_USER_DATA' = 'user/SET_USER_DATA',
  'FETCH_USER_DATA' = 'user/FETCH_USER_DATA',
  'SET_LOADING_STATE' = 'user/SET_LOADING_STATE',
}

export interface ISetUserDataAction extends Action<UserDataActionsType> {
  type: UserDataActionsType.SET_USER_DATA;
  payload: UserState['data'];
}

export interface IFetchUserDataAction {
  type: UserDataActionsType.FETCH_USER_DATA;
  payload: LoginFormData;
}

export interface ISetLoadingStateAction {
  type: UserDataActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export type UserDataActions = ISetUserDataAction | IFetchUserDataAction | ISetLoadingStateAction;
