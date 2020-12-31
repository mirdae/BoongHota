import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { formSaga, form } from './form';
import { shopSaga, shop } from './shop';
import { map } from './map';
import { modal } from './modal';

export const rootReducer = combineReducers({ form, shop, map, modal });

export function* rootSaga() {
  yield all([fork(formSaga), fork(shopSaga)]);
}

export type RootState = ReturnType<typeof rootReducer>;
