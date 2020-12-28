import { createAction, handleActions } from 'redux-actions';
import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import {
  postSnackInfo,
  getAllSnackInfo,
  getSelectedSnackInfo,
} from '../api/snack';

const CREATE_SNACK = 'newSnack/CREATE_SNACK';
const CREATE_SNACK_SUCCESS = 'newSnack/CREATE_SNACK_SUCCESS';
const CREATE_SNACK_FAILURE = 'newSnack/CREATE_SNACK_FAILURE';
const ALL_SNACKS = 'newSnack/ALL_SNACKS';
const ALL_SNACKS_SUCCESS = 'newSnack/ALL_SNACKS_SUCCESS';
const ALL_SNACKS_FAILURE = 'newSnack/ALL_SNACKS_FAILURE';
const SELECTED_SNACK = 'newSnack/SELECTED_SNACK';
const SELECTED_SNACK_SUCCESS = 'newSnack/SELECTED_SNACK_SUCCESS';
const SELECTED_SNACK_FAILURE = 'newSnack/SELECTED_SNACK_FAILURE';

const CHANGE_STORE_NAME = 'newSnack/CHANGE_STORE_NAME';
const CHANGE_FOOD = 'newSnack/CHANGE_FOOD';
const CHANGE_LOCATION = 'newSnack/CHANGE_LOCATION';
const CHANGE_LOCATION_NUM = 'newSnack/CHANGE_LOCATION_NUM';
const CHANGE_TIME = 'newSnack/CHANGE_TIME';
const CLOSE_FORM = 'newSnack/CLOSE_FORM';
const OPEN_FORM = 'newSnack/OPEN_FORM';
const OPEN_MAP = 'newSnack/OPEN_MAP';
const CLOSE_MAP = 'newSnack/CLOSE_MAP';

export const createSnack = createAction(CREATE_SNACK, (snackInfo) => snackInfo);
export const changeStoreName = createAction(
  CHANGE_STORE_NAME,
  (storeName) => storeName,
);
export const changeFood = createAction(CHANGE_FOOD, (food) => food);
export const changeLocation = createAction(
  CHANGE_LOCATION,
  (location) => location,
);
export const changeLocationNum = createAction(
  CHANGE_LOCATION_NUM,
  (locationNum) => locationNum,
);

export const changeTime = createAction(CHANGE_TIME, (time) => time);
export const openForm = createAction(OPEN_FORM);
export const closeForm = createAction(CLOSE_FORM);
export const openMap = createAction(OPEN_MAP);
export const closeMap = createAction(CLOSE_MAP);

function* createSnackSaga(snackInfo) {
  try {
    const result = yield call(postSnackInfo, snackInfo);
    yield put({ type: CREATE_SNACK_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: CREATE_SNACK_FAILURE, payload: error });
    console.log(error);
  }
}

function* allSnackSaga() {
  try {
    const result = yield call(getAllSnackInfo);
    yield put({ type: ALL_SNACKS_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: ALL_SNACKS_FAILURE, payload: error });
    console.log(error);
  }
}

function* selectedSnackSaga(snackInfo) {
  try {
    const result = yield call(getSelectedSnackInfo, snackInfo);
    yield put({ type: SELECTED_SNACK_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: SELECTED_SNACK_FAILURE, payload: error });
    console.log(error);
  }
}
export function* newSnackSaga() {
  yield takeEvery(CREATE_SNACK, createSnackSaga);
  yield takeEvery(ALL_SNACKS, allSnackSaga);
  yield takeEvery(SELECTED_SNACK, selectedSnackSaga);
}

const initialState = {
  storeName: '',
  food: '',
  locationNum: [0, 0],
  location: '',
  time: ['00:00', '00:00'],
  isModalVisible: false,
  isMapVisible: false,
};

export const newSnack = handleActions(
  {
    [CREATE_SNACK_SUCCESS]: (state, payload) => {
      return { ...state, formClose: true };
    },
    [CREATE_SNACK_FAILURE]: (state, payload) => {
      console.log('실패함' + payload);
    },
    [ALL_SNACKS_SUCCESS]: (state, payload) => {
      console.log('성공함' + payload);
      return { ...state, formClose: true };
    },
    [ALL_SNACKS_FAILURE]: (state, payload) => {
      console.log('실패함' + payload);
    },
    [SELECTED_SNACK_SUCCESS]: (state, payload) => {
      console.log('성공함' + payload);
      return { ...state, formClose: true };
    },
    [SELECTED_SNACK_FAILURE]: (state, payload) => {
      console.log('실패함' + payload);
    },
    [CHANGE_STORE_NAME]: (state, { payload: storeName }) => ({
      ...state,
      storeName,
    }),
    [CHANGE_FOOD]: (state, { payload: food }) => ({ ...state, food }),
    [CHANGE_LOCATION]: (state, { payload: location }) => ({
      ...state,
      location,
    }),
    [CHANGE_LOCATION_NUM]: (state, { payload: locationNum }) => ({
      ...state,
      locationNum,
    }),
    [CHANGE_TIME]: (state, { payload: time }) => ({ ...state, time }),
    [OPEN_FORM]: () => ({
      ...initialState,
      isModalVisible: true,
    }),
    [CLOSE_FORM]: (state) => ({
      ...state,
      isModalVisible: false,
    }),
    [OPEN_MAP]: (state) => ({
      ...state,
      isMapVisible: true,
    }),
    [CLOSE_MAP]: (state) => ({
      ...state,
      isMapVisible: false,
    }),
  },
  initialState,
);
