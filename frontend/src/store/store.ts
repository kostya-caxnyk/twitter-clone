import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';
import { TweetsState } from './ducks/tweets/contracts/state';
import { TopicsState } from './ducks/topics/contracts/state';
import { UserState } from './ducks/user/contracts/state';
import { TweetState } from './ducks/tweet/contracts/state';
import { rootReducer } from './rootReducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  tweets: TweetsState;
  topics: TopicsState;
  tweet: TweetState;
  user: UserState;
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
