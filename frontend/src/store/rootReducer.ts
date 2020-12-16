import { tweetsReducer } from './ducks/tweets/reducer';
import { combineReducers } from 'redux';
import { topicsReducer } from './ducks/topics/reducer';

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  topics: topicsReducer,
});
