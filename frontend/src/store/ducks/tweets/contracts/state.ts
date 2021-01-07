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
}

export interface TweetsState {
  items: Tweet[];
  LoadingStatus: LoadingStatus;
  addFormState: AddFormState;
  deleteTweetState: DeleteTweetState;
}
