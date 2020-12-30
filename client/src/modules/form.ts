import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { postSnackInfo } from '../api/snack';
import {
  StoreName,
  StoreType,
  Time,
  GeoLocation,
  Address,
  Snack,
} from '../types';

const CREATE_SNACK = 'form/CREATE_SNACK';
const CREATE_SNACK_SUCCESS = 'form/CREATE_SNACK_SUCCESS';
const CREATE_SNACK_FAILURE = 'form/CREATE_SNACK_FAILURE';

const CHANGE_STORE_NAME = 'form/CHANGE_STORE_NAME';
const CHANGE_STORE_TYPE = 'form/CHANGE_STORE_TYPE';
const CHANGE_ADDRESS = 'form/CHANGE_ADDRESS';
const CHANGE_GEO_LOCATION = 'form/CHANGE_GEO_LOCATION';
const CHANGE_TIME = 'form/CHANGE_TIME';

export const createSnack = createAction(
  CREATE_SNACK,
  (snackInfo) => snackInfo,
)<Snack>();
export const createSnackSuccess = createAction(
  CREATE_SNACK_SUCCESS,
  (snackInfo) => snackInfo,
)<Snack>();
export const createSnackFailure = createAction(
  CREATE_SNACK_FAILURE,
  (error) => error,
)<Error>();

export const changeStoreName = createAction(
  CHANGE_STORE_NAME,
  (storeName) => storeName,
)<StoreName>();
export const changeStoreType = createAction(
  CHANGE_STORE_TYPE,
  (storeType) => storeType,
)<StoreType>();
export const changeAddress = createAction(
  CHANGE_ADDRESS,
  (address) => address,
)<Address>();
export const changeGeoLocation = createAction(
  CHANGE_GEO_LOCATION,
  (geoLocation) => geoLocation,
)<GeoLocation>();

export const changeTime = createAction(CHANGE_TIME, (time: Time) => time)();

const actions = {
  createSnack,
  createSnackSuccess,
  createSnackFailure,
  changeStoreName,
  changeGeoLocation,
  changeAddress,
  changeStoreType,
  changeTime,
};

const createSnackActions = {
  createSnack,
  createSnackSuccess,
  createSnackFailure,
};

type FormAction = ActionType<typeof actions>;
type CreateSnackActions = ActionType<typeof createSnackActions>;
type FormState = Snack;

function* createSnackSaga(storeInfo: CreateSnackActions) {
  const { payload } = storeInfo;
  try {
    const result = yield call(postSnackInfo, payload);
    yield put({ type: CREATE_SNACK_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: CREATE_SNACK_FAILURE, payload: error });
    console.log(error);
  }
}

export function* formSaga() {
  yield takeLatest(CREATE_SNACK, createSnackSaga);
}

const initialState: FormState = {
  storeName: '',
  storeType: '',
  geoLocation: [0, 0],
  address: '',
  time: ['00:00', '00:00'],
};

export const form = createReducer<FormState, FormAction>(initialState, {
  [CREATE_SNACK_SUCCESS]: (state, action) => {
    return { ...state };
  },
  [CREATE_SNACK_FAILURE]: (state, action) => ({
    ...state,
  }),
  [CHANGE_STORE_NAME]: (state, { payload: storeName }) => ({
    ...state,
    storeName,
  }),
  [CHANGE_STORE_TYPE]: (state, { payload: storeType }) => ({
    ...state,
    storeType,
  }),
  [CHANGE_GEO_LOCATION]: (state, { payload: geoLocation }) => ({
    ...state,
    geoLocation,
  }),
  [CHANGE_ADDRESS]: (state, { payload: address }) => ({
    ...state,
    address,
  }),
  [CHANGE_TIME]: (state, { payload: time }) => ({ ...state, time }),
});
