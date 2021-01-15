import produce, { Draft } from 'immer';
import { LoadingStatus } from '../../types';
import { TweetDataActions, TweetDataActionsType } from './contracts/actionTypes';
import { TweetState } from './contracts/state';

const initialTweetDataState: TweetState = {
  data: null,
  comments: null,
  LoadingStatus: LoadingStatus.NEVER,
  addCommentStatus: LoadingStatus.NEVER,
  commentsLoadingStatus: LoadingStatus.NEVER,
};

export const tweetReducer = produce((draft: Draft<TweetState>, action: TweetDataActions) => {
  switch (action.type) {
    case TweetDataActionsType.SET_TWEET_DATA:
      draft.data = action.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;

    case TweetDataActionsType.FETCH_TWEET_DATA:
      draft.data = null;
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;

    case TweetDataActionsType.SET_LOADING_STATE:
      draft.LoadingStatus = action.payload;
      break;

    case TweetDataActionsType.SET_COMMENTS_LOADING_STATUS:
      draft.commentsLoadingStatus = action.payload;
      break;

    case TweetDataActionsType.SET_COMMENTS:
      draft.comments = action.payload;
      draft.commentsLoadingStatus = LoadingStatus.LOADED;
      break;

    case TweetDataActionsType.SET_ADD_COMMENT_LOADING_STATE:
      draft.addCommentStatus = action.payload;
      break;

    case TweetDataActionsType.SET_ADD_COMMENT:
      const newComment = action.payload;
      if (draft.data?._id === newComment.commentTo) {
        draft.comments?.unshift(newComment);
        draft.data?.comments.push(newComment._id);
      }
      const commentedComment = draft.comments?.find((el) => el._id === newComment.commentTo);
      if (commentedComment) {
        commentedComment.comments.push(newComment._id);
      }
      draft.addCommentStatus = LoadingStatus.LOADED;
      break;

    case TweetDataActionsType.DELETE_COMMENT:
      const deletedCommentIdx = draft.comments?.findIndex((tweet) => tweet._id === action.payload);
      if (deletedCommentIdx) {
        draft.comments?.splice(deletedCommentIdx, 1);
        if (draft.data) {
          draft.data.comments = draft.data.comments.filter((id) => id !== action.payload);
        }
      }
      break;
  }
}, initialTweetDataState);
