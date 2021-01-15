import { TweetsState, AddFormState, DeleteTweetState } from './contracts/state';
import produce, { Draft } from 'immer';
import { TweetsActions, TweetsActionsType } from './contracts/actionTypes';
import { LoadingStatus } from '../../types';

const initialTweetsState: TweetsState = {
  items: null,
  LoadingStatus: LoadingStatus.NEVER,
  addFormState: AddFormState.NEVER,
  deleteTweetState: DeleteTweetState.NEVER,
};

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
  switch (action.type) {
    case TweetsActionsType.SET_TWEETS:
      draft.items = action.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;

    case TweetsActionsType.FETCH_TWEETS:
      draft.items = [];
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;

    case TweetsActionsType.SET_LOADING_STATE:
      draft.LoadingStatus = action.payload;
      break;

    case TweetsActionsType.SET_ADD_FORM_STATE:
      draft.addFormState = action.payload;
      break;

    case TweetsActionsType.FETCH_ADD_TWEET:
      draft.addFormState = AddFormState.LOADING;
      break;

    case TweetsActionsType.ADD_TWEET:
      draft.addFormState = AddFormState.LOADED;
      draft.items?.unshift(action.payload);
      break;

    case TweetsActionsType.FETCH_DELETE_TWEET:
      draft.deleteTweetState = DeleteTweetState.LOADING;
      break;

    case TweetsActionsType.DELETE_TWEET:
      draft.deleteTweetState = DeleteTweetState.NEVER;
      const deletedTweetId = draft.items?.findIndex((tweet) => tweet._id === action.payload);
      if (deletedTweetId) {
        draft.items?.splice(deletedTweetId, 1);
      }
      break;

    case TweetsActionsType.SET_DELETE_TWEET_STATE:
      draft.deleteTweetState = action.payload;
      break;

    case TweetsActionsType.ADD_COMMENT_TO_TWEET:
      const newComment = action.payload;
      const commentedTweet = draft.items?.find((el) => el._id === newComment.commentTo);
      commentedTweet?.comments.push(newComment._id);
      break;
  }
}, initialTweetsState);
