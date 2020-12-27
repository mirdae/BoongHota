import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { newSnackSaga, newSnack } from './newSnack';
import { fullMapSaga, fullMap } from './fullMap';

export const rootReducer = combineReducers({ newSnack });

export function* rootSaga() {
  yield all([fork(newSnackSaga)]);
}
