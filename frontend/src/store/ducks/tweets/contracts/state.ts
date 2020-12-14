export enum LoadingState {
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface Tweet {
  text: string;
  user: {
    name: string;
    username: string;
    avatarUrl: string;
  };
  date: Date;
}

export interface TweetsState {
  items: Tweet[];
  loadingState: LoadingState;
}
