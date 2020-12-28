import { createReducer } from 'typesafe-actions';
import { takeLatest, takeEvery } from 'redux-saga/effects';

export function* fullMapSaga() {}

const initialState = {};

export const fullMap = createReducer({}, initialState);
