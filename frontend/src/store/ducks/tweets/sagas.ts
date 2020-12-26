import { setTweetsLoadingState, setTweets, addTweet, setAddFormState } from './actionCreators';
import { call, put, takeEvery } from 'redux-saga/effects';
import { tweetsApi } from '../../../services/tweetsApi';
import { LoadingState, AddFormState, Tweet } from './contracts/state';
import { IFetchAddTweetAction, TweetsActionsType } from './contracts/actionTypes';

export function* fetchTweetsRequest() {
  try {
    const tweets = yield call(tweetsApi.getTweets);
    yield put(setTweets(tweets));
  } catch (e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* addTweetRequest({ payload }: IFetchAddTweetAction) {
  try {
    const tweet: Tweet = yield call(tweetsApi.addTweet, payload);
    yield put(addTweet(tweet));
  } catch (e) {
    yield put(setAddFormState(AddFormState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, addTweetRequest);
}
