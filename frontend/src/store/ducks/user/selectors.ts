import { RootState } from '../../store';
import { LoadingStatus } from '../../types';

export const selectUser = (state: RootState) => state.user;

export const selectUserData = (state: RootState) => selectUser(state).data;

export const selectUserLoadingStatus = (state: RootState) => selectUser(state).LoadingStatus;

export const selectIsUserLoading = (state: RootState) =>
  selectUser(state).LoadingStatus === LoadingStatus.LOADING;

export const selectIsUserLoggedIn = (state: RootState) =>
  selectUser(state).LoadingStatus === LoadingStatus.LOADED;

export const selectUserDataHasError = (state: RootState) =>
  selectUser(state).LoadingStatus === LoadingStatus.ERROR;

export const selectIsNeverLoading = (state: RootState) =>
  selectUser(state).LoadingStatus === LoadingStatus.NEVER;

export const selectErrorMessage = (state: RootState) => selectUser(state).errorMsg;
