import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { storeSaga, store } from './store';

export const rootReducer = combineReducers({ store });

export function* rootSaga() {
  yield all([fork(storeSaga)]);
}
