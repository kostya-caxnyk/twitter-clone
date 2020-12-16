import { Action } from 'redux';
import { LoadingState, Topic } from './contracts/state';

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

export interface ISetLoadingStateAction {
  type: TopicsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export const setTopics = (payload: Topic[]): ISetTopicsAction => ({
  type: TopicsActionsType.SET_TOPICS,
  payload,
});

export const fetchTopics = (): IFetchTopicsAction => ({
  type: TopicsActionsType.FETCH_TOPICS,
});

export const setTopicsLoadingState = (payload: LoadingState): ISetLoadingStateAction => ({
  type: TopicsActionsType.SET_LOADING_STATE,
  payload,
});

export type TopicsActions = ISetTopicsAction | IFetchTopicsAction | ISetLoadingStateAction;
