import { LoadingStatus } from '../../types';
import { User } from '../user/contracts/state';
import {
  IFetchUsersAction,
  ISetLoadingStatusAction,
  ISetUsersAction,
  UsersActionsType,
} from './contracts/actionTypes';

export const setUsers = (payload: User[]): ISetUsersAction => ({
  type: UsersActionsType.SET_ITEMS,
  payload,
});

export const fetchUsers = (quantity: number): IFetchUsersAction => ({
  type: UsersActionsType.FETCH_ITEMS,
  payload: quantity,
});

export const setUsersLoadingStatus = (payload: LoadingStatus): ISetLoadingStatusAction => ({
  type: UsersActionsType.SET_LOADING_STATE,
  payload,
});
