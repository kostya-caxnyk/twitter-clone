import {
  setTweetsLoadingStatus,
  setTweets,
  addTweet,
  setAddFormState,
  deleteTweet,
  setDeleteTweetState,
} from './actionCreators';
import { call, put, takeEvery } from 'redux-saga/effects';
import { tweetsApi } from '../../../services/tweetsApi';
import { AddFormState, DeleteTweetState, Tweet } from './contracts/state';
import {
  IFetchAddTweetAction,
  TweetsActionsType,
  IFetchDeleteTweetAction,
  IFetchTweetsAction,
} from './contracts/actionTypes';
import { ImageData, LoadingStatus } from '../../types';
import uploadImages from '../../../utils/uploadImages';

export function* fetchTweetsRequest({ payload }: IFetchTweetsAction) {
  try {
    const tweets = yield call(tweetsApi.getTweets, payload);
    yield put(setTweets(tweets));
  } catch (e) {
    yield put(setTweetsLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* addTweetRequest({ payload }: IFetchAddTweetAction) {
  try {
    const images: ImageData[] = yield call(uploadImages, payload.files);
    const tweet: Tweet = yield call(tweetsApi.addTweet, {
      text: payload.text,
      images,
    });
    yield put(addTweet(tweet));
  } catch (e) {
    yield put(setAddFormState(AddFormState.ERROR));
  }
}

export function* deleteTweetRequest({ payload }: IFetchDeleteTweetAction) {
  try {
    const id: string = yield call(tweetsApi.deleteTweet, payload);
    yield put(deleteTweet(id));
  } catch (error) {
    yield put(setDeleteTweetState(DeleteTweetState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, addTweetRequest);
  yield takeEvery(TweetsActionsType.FETCH_DELETE_TWEET, deleteTweetRequest);
}
