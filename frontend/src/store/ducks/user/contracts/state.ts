export enum LoadingState {
  LOGGEDIN = 'LOGGEDIN',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  LOADING = 'LOADING',
}

export interface User {
  email: string;
  username: string;
  name: string;
  _id: string;
  token: string;
  confirmed: boolean;
  avatarUrl?: string;
  location?: string;
  about?: string;
  website?: string;
}

export interface UserState {
  data: User | null;
  loadingState: LoadingState;
}
