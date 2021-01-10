import { setNewFollowingArr } from './../user/actionCreators';
import { setUsers, setUsersLoadingStatus } from './actionCreators';
import {
  UsersActionsType,
  IFetchUsersAction,
  IFetchFollowUserAction,
} from './contracts/actionTypes';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LoadingStatus } from '../../types';
import { User } from '../user/contracts/state';
import { userApi } from '../../../services/userApi';

export function* fetchUsersRequest({ payload }: IFetchUsersAction) {
  try {
    const users: User[] = yield call(userApi.getUsers, payload);
    yield put(setUsers(users));
  } catch (e) {
    yield put(setUsersLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* fetchFollowingUser({ payload }: IFetchFollowUserAction) {
  try {
    const followingUsers: string[] = payload.isFollowing
      ? yield call(userApi.unfollowUser, payload.id)
      : yield call(userApi.followUser, payload.id);
    yield put(setNewFollowingArr(followingUsers));
  } catch (e) {
    console.log(e);
  }
}

export function* usersSaga() {
  yield takeEvery(UsersActionsType.FETCH_ITEMS, fetchUsersRequest);
  yield takeEvery(UsersActionsType.FETCH_FOLLOW_USER, fetchFollowingUser);
}
