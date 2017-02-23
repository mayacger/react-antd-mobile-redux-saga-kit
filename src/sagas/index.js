import { put, call, takeEvery, fork, take } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import * as actions from '../actions'

function* incrementAsync() {
  yield call(delay, 1000)
  yield put({type: 'INCREMENT'})
}

function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// function* watchNavigate() {
//   while(true) {
//     console.log(1)
//     const {pathname} = yield take(actions.NAVIGATE)
//
//     yield history.push(pathname)
//   }
// }


export default function* root() {
  yield [
    // fork(watchNavigate),
    fork(incrementAsync),
    fork(rootSaga)
  ]
}
