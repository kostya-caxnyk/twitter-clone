export enum LoadingState {
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  LOADING = 'LOADING',
}

export interface Tweet {
  _id: string;
  text: string;
  user: {
    name: string;
    username: string;
    avatarUrl: string;
  };
  createdAt: string;
}

export interface TweetState {
  data: Tweet | null;
  loadingState: LoadingState;
}
