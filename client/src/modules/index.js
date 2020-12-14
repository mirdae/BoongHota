import {combineReducers} from 'redux';
import {all, fork} from 'redux-saga/effects';

export const rootReducer = combineReducers({});

export function* rootSaga() {
    yield all([]);
}
