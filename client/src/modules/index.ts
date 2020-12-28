import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { newSnackSaga, newSnack } from './newSnack';
import { snacksSaga, snacks } from './snacks';

export const rootReducer = combineReducers({ newSnack, snacks });

export function* rootSaga() {
  yield all([fork(newSnackSaga), fork(snacksSaga)]);
}
