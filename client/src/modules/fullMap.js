import { createAction, handleActions } from 'redux-actions';
import { takeLatest, takeEvery } from 'redux-saga/effects';

export function* fullMapSaga() {}

const initialState = {};

export const fullMap = handleActions({}, initialState);
