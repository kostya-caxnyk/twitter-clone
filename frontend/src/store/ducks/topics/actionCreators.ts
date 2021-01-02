import { Action } from 'redux';
import { LoadingStatus } from '../../types';
import { Topic } from './contracts/state';

export enum TopicsActionsType {
  'SET_TOPICS' = 'topics/SET_TOPICS',
  'FETCH_TOPICS' = 'topics/FETCH_TOPICS',
  'SET_LOADING_STATE' = 'topics/SET_LOADING_STATE',
}

export interface ISetTopicsAction extends Action<TopicsActionsType> {
  type: TopicsActionsType.SET_TOPICS;
  payload: Topic[];
}

export interface IFetchTopicsAction {
  type: TopicsActionsType.FETCH_TOPICS;
}

export interface ISetLoadingStatusAction {
  type: TopicsActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}

export const setTopics = (payload: Topic[]): ISetTopicsAction => ({
  type: TopicsActionsType.SET_TOPICS,
  payload,
});

export const fetchTopics = (): IFetchTopicsAction => ({
  type: TopicsActionsType.FETCH_TOPICS,
});

export const setTopicsLoadingStatus = (payload: LoadingStatus): ISetLoadingStatusAction => ({
  type: TopicsActionsType.SET_LOADING_STATE,
  payload,
});

export type TopicsActions = ISetTopicsAction | IFetchTopicsAction | ISetLoadingStatusAction;
