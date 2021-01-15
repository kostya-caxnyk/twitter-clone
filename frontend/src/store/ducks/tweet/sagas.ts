import { setNewLikedTweetsArr } from './../user/actionCreators';
import {
  IFetchTweetDataAction,
  TweetDataActionsType,
  IFetchLikeTweetAction,
  IFetchAddCommentAction,
  IFetchCommentsAction,
} from './contracts/actionTypes';
import { Tweet } from './../tweets/contracts/state';
import {
  setTweetData,
  setTweetDataLoadingStatus,
  setComments,
  setCommentsLoadingStatus,
  setAddComment,
  setAddCommentLoadingStatus,
} from './actionCreators';
import { call, put, takeEvery } from 'redux-saga/effects';
import { tweetsApi } from '../../../services/tweetsApi';
import { LoadingStatus } from '../../types';
import uploadImages from '../../../utils/uploadImages';
import { addCommentToTweet } from '../tweets/actionCreators';

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

export function* fetchAddCommentRequest({ tweetId, text, images: files }: IFetchAddCommentAction) {
  try {
    yield put(setAddCommentLoadingStatus(LoadingStatus.LOADING));
    const images: ImageData[] = yield call(uploadImages, files);
    const tweet: Tweet = yield call(tweetsApi.addComment, { tweetId, text, images });
    yield put(setAddComment(tweet));
    yield put(addCommentToTweet(tweet));
  } catch (e) {
    yield put(setAddCommentLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* fetchCommentsRequest({ payload }: IFetchCommentsAction) {
  try {
    yield put(setCommentsLoadingStatus(LoadingStatus.LOADING));
    const comments: Tweet[] = yield call(tweetsApi.getComments, payload);
    yield put(setComments(comments));
  } catch (e) {
    console.log(e.response);
    yield put(setCommentsLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* tweetSaga() {
  yield takeEvery(TweetDataActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest);
  yield takeEvery(TweetDataActionsType.FETCH_LIKE_TWEET, fetchLikeTweetRequest);
  yield takeEvery(TweetDataActionsType.FETCH_ADD_COMMENT, fetchAddCommentRequest);
  yield takeEvery(TweetDataActionsType.FETCH_COMMENTS, fetchCommentsRequest);
}
