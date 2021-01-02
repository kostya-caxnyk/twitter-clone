import { LoadingStatus } from '../../../types';

export interface User {
  email: string;
  username: string;
  name: string;
  _id: string;
  confirmed: boolean;
  token: string;
  avatarUrl?: string;
  location?: string;
  about?: string;
  website?: string;
}

export interface UserState {
  data: User | null;
  LoadingStatus: LoadingStatus;
}
