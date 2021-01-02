import { all } from 'redux-saga/effects';

import { topicsSaga } from './ducks/topics/sagas';
import { tweetSaga } from './ducks/tweet/sagas';
import { tweetsSaga } from './ducks/tweets/sagas';
import { userSaga } from './ducks/user/sagas';

export default function* rootSaga() {
  yield all([tweetsSaga(), topicsSaga(), tweetSaga(), userSaga()]);
}
