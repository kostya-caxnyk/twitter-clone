import { Action } from 'redux';
import { LoadingStatus } from '../../../types';
import { UsersState } from './state';

export enum UsersActionsType {
  'SET_ITEMS' = 'users/SET_ITEMS',
  'FETCH_ITEMS' = 'users/FETCH_ITEMS',
  'SET_LOADING_STATE' = 'users/SET_LOADING_STATE',
  'FETCH_FOLLOW_USER' = 'users/FETCH_FOLLOW_USER',
}

export interface IFollowUserReq {
  id: string;
  isFollowing: boolean;
}

export interface ISetUsersAction extends Action<UsersActionsType> {
  type: UsersActionsType.SET_ITEMS;
  payload: UsersState['items'];
}

export interface IFetchUsersAction {
  type: UsersActionsType.FETCH_ITEMS;
  payload: number;
}

export interface ISetLoadingStatusAction {
  type: UsersActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}

export interface IFetchFollowUserAction {
  type: UsersActionsType.FETCH_FOLLOW_USER;
  payload: IFollowUserReq;
}

export type UsersActions = ISetUsersAction | IFetchUsersAction | ISetLoadingStatusAction;
