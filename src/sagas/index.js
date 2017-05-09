import { take, fork, all } from 'redux-saga/effects';
import navigate from '../services/navigate';
import * as actions from '../actions';





function* watchNavigate() {
  while(true) {
    const {location, method} = yield take(actions.NAVIGATE);

    yield fork(navigate, location, method);

  }
}

export default function* root() {
  yield all([
    fork(watchNavigate),
  ]);
}
