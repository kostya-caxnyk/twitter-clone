import { LoadingStatus } from '../../../types';
import { Tweet } from '../../tweets/contracts/state';

export interface TweetState {
  data: Tweet | null;
  comments: Tweet[] | null;
  addCommentStatus: LoadingStatus;
  LoadingStatus: LoadingStatus;
  commentsLoadingStatus: LoadingStatus;
}
