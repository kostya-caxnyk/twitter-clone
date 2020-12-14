import { tweetsReducer } from './ducks/tweets/reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
});
