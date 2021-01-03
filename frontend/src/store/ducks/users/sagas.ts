import { setUsers, setUsersLoadingStatus } from './actionCreators';
import { UsersActionsType } from './contracts/actionTypes';
import { call, put, takeEvery } from 'redux-saga/effects';
import { topicsApi } from '../../../services/topicsApi';
import { LoadingStatus } from '../../types';
import { User } from '../user/contracts/state';

export function* fetchUsersRequest() {
  try {
    const users: User[] = yield call(topicsApi.getTopics);
    yield put(setUsers(users));
  } catch (e) {
    yield put(setUsersLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* usersSaga() {
  yield takeEvery(UsersActionsType.FETCH_ITEMS, fetchUsersRequest);
}
