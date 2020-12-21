import { createAction, handleActions } from 'redux-actions';
import { takeLatest, takeEvery } from 'redux-saga/effects';

const CREATE_STORE = 'store/CREATE_STORE';
const CREATE_STORE_SUCCESS = 'store/CREATE_STORE_SUCCESS';
const CREATE_STORE_FAILURE = 'store/CREATE_STORE_FAILURE';

const GET_STORES = 'store/GET_STORES';
const GET_STORES_SUCCESS = 'store/GET_STORES_SUCCESS';
const GET_STORES_FAILURE = 'store/GET_STORES_FAILURE';

export const createStore = createAction(CREATE_STORE, (payload) => {
  payload;
});

export const getStores = createAction(GET_STORES, (payload) => {
  payload;
});

function* createStoreSaga({ payload }) {
  yield console.log('여기까지 왔는교?');
  yield console.log(payload);
}

export function* storeSaga() {
  yield takeLatest(CREATE_STORE, createStoreSaga);
}

const initialState = {
  stores: [],
};

export const store = handleActions(
  {
    [CREATE_STORE_SUCCESS]: (state, payload) => ({ ...state, payload }),
  },
  initialState,
);
