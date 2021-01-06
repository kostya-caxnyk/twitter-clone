import { ImageData, LoadingStatus } from '../../../types';

export interface Tweet {
  _id: string;
  text: string;
  user: {
    name: string;
    username: string;
    avatarUrl: string;
  };
  createdAt: string;
  images: ImageData[];
}

export interface TweetState {
  data: Tweet | null;
  LoadingStatus: LoadingStatus;
}
