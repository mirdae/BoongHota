import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { formSaga, form } from './form';
import { snackStoresSaga, snackStores } from './snackStores';
import { map } from './map';
import { modal } from './modal';

export const rootReducer = combineReducers({ form, snackStores, map, modal });

export function* rootSaga() {
  yield all([fork(formSaga), fork(snackStoresSaga)]);
}

export type RootState = ReturnType<typeof rootReducer>;
