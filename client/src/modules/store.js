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

// test case
const store1 = {
  name: '호호붕어빵',
  type: 'boong',
  longitude: 488.591214,
  latitude: 35.879481,
  address: '대구 북구 고성동',
  start_time: '09:00',
  end_time: '19:00',
};

const store2 = {
  name: '하하붕어빵',
  type: 'boong',
  longitude: 488.613911,
  latitude: 35.887381,
  address: '대구 북구 신암북로',
  start_time: '11:00',
  end_time: '19:00',
};

const store3 = {
  name: '대머리타코야키',
  type: 'ta',
  longitude: 488.612261,
  latitude: 35.885643,
  address: '대구 북구 경대로',
  start_time: '16:00',
  end_time: '22:00',
};

const store4 = {
  name: '호호호빵',
  type: 'ho',
  longitude: 488.607672,
  latitude: 35.882929,
  address: '대구 북구 대현로',
  start_time: '09:00',
  end_time: '19:00',
};

const initialState = {
  stores: [store1, store2, store3, store4],
};

export const store = handleActions(
  {
    [CREATE_STORE_SUCCESS]: (state, payload) => ({ ...state, payload }),
    [CREATE_STORE_FAILURE]: (state, payload) => ({ ...state }),
  },
  initialState,
);
