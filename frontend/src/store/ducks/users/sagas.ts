import { setUsers, setUsersLoadingStatus } from './actionCreators';
import { UsersActionsType, IFetchUsersAction } from './contracts/actionTypes';
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

export function* usersSaga() {
  yield takeEvery(UsersActionsType.FETCH_ITEMS, fetchUsersRequest);
}
