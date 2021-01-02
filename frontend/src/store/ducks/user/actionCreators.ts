import { LoadingStatus } from '../../types';
import {
  IFetchUserDataAction,
  ILoginFormData,
  IRegisterFormData,
  ISetLoadingStatusAction,
  ISetUserDataAction,
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

export const registerUser = (data: IRegisterFormData) => ({
  type: UserDataActionsType.REGISTER_USER,
  payload: data,
});

export const checkCurrentUser = () => ({
  type: UserDataActionsType.CHECK_CURRENT_USER,
});
