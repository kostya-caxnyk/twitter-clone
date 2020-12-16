export enum LoadingState {
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  LOADING = 'LOADING',
}

export interface Topic {
  _id: string;
  name: string;
  tweets: number;
}

export interface TopicsState {
  items: Topic[];
  loadingState: LoadingState;
}
