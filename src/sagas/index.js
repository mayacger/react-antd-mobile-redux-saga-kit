import { put, call, takeEvery, fork, take } from 'redux-saga/effects'
import { delay } from 'redux-saga'

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({type: 'INCREMENT'})
}

export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
