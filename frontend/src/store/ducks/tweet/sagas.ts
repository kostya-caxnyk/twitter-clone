import { IFetchTweetDataAction, TweetDataActionsType } from './contracts/actionTypes';
import { Tweet } from './../tweets/contracts/state';
import { setTweetData, setTweetDataLoadingState } from './actionCreators';
import { call, put, takeEvery } from 'redux-saga/effects';
import { tweetsApi } from '../../../services/tweetsApi';
import { LoadingState } from './contracts/state';

export function* fetchTweetDataRequest({ payload: tweetId }: IFetchTweetDataAction) {
  try {
    const data: Tweet[] = yield call(tweetsApi.getTweetData, tweetId);
    yield put(setTweetData(data[0]));
  } catch (e) {
    yield put(setTweetDataLoadingState(LoadingState.ERROR));
  }
}

export function* tweetSaga() {
  yield takeEvery(TweetDataActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest);
}
