export enum LoadingState {
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  LOADING = 'LOADING',
}

export enum AddFormState {
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  LOADING = 'LOADING',
}

export enum DeleteState {
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

export interface TweetsState {
  items: Tweet[];
  loadingState: LoadingState;
  addFormState: AddFormState;
  deleteTweetState: DeleteState;
}
