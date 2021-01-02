import { LoadingStatus } from '../../../types';

export interface Topic {
  _id: string;
  name: string;
  tweets: number;
}

export interface TopicsState {
  items: Topic[];
  LoadingStatus: LoadingStatus;
}
