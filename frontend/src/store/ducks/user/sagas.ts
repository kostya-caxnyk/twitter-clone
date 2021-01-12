import { User } from './../user/contracts/state';
import { setUserData, setUserLoadingStatus } from './actionCreators';
import { call, put, takeEvery } from 'redux-saga/effects';
import { authApi } from '../../../services/authApi';
import { ImageData, LoadingStatus } from '../../types';
import {
  IFetchUserDataAction,
  IFetchRegisterUserAction,
  UserDataActionsType,
  IFetchEditUserDataAction,
} from './contracts/actionTypes';
import { userApi } from '../../../services/userApi';
import uploadImages from '../../../utils/uploadImages';

export function* fetchUserDataRequest({ payload }: IFetchUserDataAction) {
  try {
    const data: User = yield call(authApi.signIn, payload);
    localStorage.setItem('token', data.token);
    yield put(setUserData(data));
  } catch (e) {
    yield put(setUserLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* checkCurrentUser() {
  try {
    const user: User = yield call(authApi.checkCurrentUser);
    yield put(setUserData(user));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* fetchRegisterUserRequest({ payload }: IFetchRegisterUserAction) {
  try {
    yield put(setUserLoadingStatus(LoadingStatus.LOADING));
    const user: User = yield call(authApi.signUp, payload);
    localStorage.setItem('token', user.token);
    yield put(setUserData(user));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* fetchEditUserDataRequest({ payload }: IFetchEditUserDataAction) {
  try {
    const { avatarFile, backgroundFile } = payload;
    const newAvatar: ImageData[] = avatarFile ? yield call(uploadImages, [avatarFile]) : [];
    const newBackgroundImage: ImageData[] = backgroundFile
      ? yield call(uploadImages, [backgroundFile])
      : [];
    const user: User = yield call(userApi.editUserData, {
      ...payload,
      avatarUrl: newAvatar[0]?.url,
      backgroundUrl: newBackgroundImage[0]?.url,
    });
    yield put(setUserData(user));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* userSaga() {
  yield takeEvery(UserDataActionsType.FETCH_USER_DATA, fetchUserDataRequest);
  yield takeEvery(UserDataActionsType.CHECK_CURRENT_USER, checkCurrentUser);
  yield takeEvery(UserDataActionsType.FETCH_REGISTER_USER, fetchRegisterUserRequest);
  yield takeEvery(UserDataActionsType.FETCH_EDIT_USER_DATA, fetchEditUserDataRequest);
}
