import { User } from './../../user/contracts/state';
import { ImageData, LoadingStatus } from '../../../types';

export enum AddFormState {
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
}

export enum DeleteTweetState {
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  LOADING = 'LOADING',
  DELETED = 'DELETED',
}

export interface Tweet {
  _id: string;
  text: string;
  images: ImageData[];
  user: User;
  createdAt: string;
  likes: string[];
  retweets: string[];
  comments: string[];
  isComment: boolean;
  commentTo?: string;
}

export interface TweetsState {
  items: Tweet[] | null;
  LoadingStatus: LoadingStatus;
  addFormState: AddFormState;
  deleteTweetState: DeleteTweetState;
}
