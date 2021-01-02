import { TopicsActionsType, setTopicsLoadingStatus, setTopics } from './actionCreators';
import { call, put, takeEvery } from 'redux-saga/effects';
import { topicsApi } from '../../../services/topicsApi';
import { LoadingStatus } from '../../types';

export function* fetchTopicsRequest() {
  try {
    const topics = yield call(topicsApi.getTopics);
    yield put(setTopics(topics));
  } catch (e) {
    yield put(setTopicsLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* topicsSaga() {
  yield takeEvery(TopicsActionsType.FETCH_TOPICS, fetchTopicsRequest);
}
