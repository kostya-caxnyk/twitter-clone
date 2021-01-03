import { RootState } from '../../store';
import { LoadingStatus } from '../../types';

export const selectUsers = (state: RootState) => state.users;

export const selectUsersItems = (state: RootState) => selectUsers(state).items;

export const selectIsUsersLoading = (state: RootState) =>
  selectUsers(state).LoadingStatus === LoadingStatus.LOADING;
