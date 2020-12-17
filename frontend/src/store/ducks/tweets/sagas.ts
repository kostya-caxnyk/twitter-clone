import {
  TweetsActionsType,
  setTweetsLoadingState,
  setTweets,
  IAddTweetAction,
} from './actionCreators';
import { call, put, takeEvery } from 'redux-saga/effects';
import { tweetsApi } from '../../../services/tweetsApi';
import { LoadingState } from './contracts/state';

export function* fetchTweetsRequest() {
  try {
    const tweets = yield call(tweetsApi.getTweets);
    yield put(setTweets(tweets));
  } catch (e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* addTweetRequest({ payload }: IAddTweetAction) {
  try {
    const tweets = yield call(tweetsApi.addTweet, payload);
    yield put(setTweets(tweets));
  } catch (e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeEvery(TweetsActionsType.ADD_TWEET, addTweetRequest);
}
