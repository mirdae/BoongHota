import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { newSnackSaga, newSnack } from './newSnack';

export const rootReducer = combineReducers({ newSnack });

export function* rootSaga() {
  yield all([fork(newSnackSaga)]);
}
