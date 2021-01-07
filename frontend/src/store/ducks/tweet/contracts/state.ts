import { User } from './../../user/contracts/state';
import { ImageData, LoadingStatus } from '../../../types';

export interface Tweet {
  _id: string;
  text: string;
  user: User;
  createdAt: string;
  images: ImageData[];
}

export interface TweetState {
  data: Tweet | null;
  LoadingStatus: LoadingStatus;
}
