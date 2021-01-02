import { combineReducers } from 'redux';

import { tweetReducer } from './ducks/tweet/reducer';
import { tweetsReducer } from './ducks/tweets/reducer';
import { topicsReducer } from './ducks/topics/reducer';
import { userReducer } from './ducks/user/reducer';

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  topics: topicsReducer,
  tweet: tweetReducer,
  user: userReducer,
});
