import { setNewLikedTweetsArr } from './../user/actionCreators';
import {
  IFetchTweetDataAction,
  TweetDataActionsType,
  IFetchLikeTweetAction,
} from './contracts/actionTypes';
import { Tweet } from './../tweets/contracts/state';
import { setTweetData, setTweetDataLoadingStatus } from './actionCreators';
import { call, put, takeEvery } from 'redux-saga/effects';
import { tweetsApi } from '../../../services/tweetsApi';
import { LoadingStatus } from '../../types';

export function* fetchTweetDataRequest({ payload: tweetId }: IFetchTweetDataAction) {
  try {
    const data: Tweet = yield call(tweetsApi.getTweetData, tweetId);
    yield put(setTweetData(data));
  } catch (e) {
    yield put(setTweetDataLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* fetchLikeTweetRequest({ id, isLiked }: IFetchLikeTweetAction) {
  try {
    const data: string[] = isLiked
      ? yield call(tweetsApi.dislikeTweet, id)
      : yield call(tweetsApi.likeTweet, id);
    yield put(setNewLikedTweetsArr(data));
  } catch (e) {
    console.log(e);
  }
}

export function* tweetSaga() {
  yield takeEvery(TweetDataActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest);
  yield takeEvery(TweetDataActionsType.FETCH_LIKE_TWEET, fetchLikeTweetRequest);
}
