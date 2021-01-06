export enum LoadingStatus {
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  LOADING = 'LOADING',
}

export interface ImageData {
  id: string;
  url: string;
  width: number;
  height: number;
}
