import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { postSnackInfo } from '../api/snack';
import {
  NewSnack,
  StoreName,
  Food,
  LocationNum,
  Location,
  Time,
} from '../types';

const CREATE_SNACK = 'newSnack/CREATE_SNACK';
const CREATE_SNACK_SUCCESS = 'newSnack/CREATE_SNACK_SUCCESS';
const CREATE_SNACK_FAILURE = 'newSnack/CREATE_SNACK_FAILURE';

const CHANGE_STORE_NAME = 'newSnack/CHANGE_STORE_NAME';
const CHANGE_FOOD = 'newSnack/CHANGE_FOOD';
const CHANGE_LOCATION = 'newSnack/CHANGE_LOCATION';
const CHANGE_LOCATION_NUM = 'newSnack/CHANGE_LOCATION_NUM';
const CHANGE_TIME = 'newSnack/CHANGE_TIME';

const CLOSE_FORM = 'newSnack/CLOSE_FORM';
const OPEN_FORM = 'newSnack/OPEN_FORM';

const OPEN_MAP = 'newSnack/OPEN_MAP';
const CLOSE_MAP = 'newSnack/CLOSE_MAP';

export const createSnack = createAction(
  CREATE_SNACK,
  (snackInfo) => snackInfo,
)<NewSnack>();
export const createSnackSuccess = createAction(
  CREATE_SNACK_SUCCESS,
  (snackInfo) => snackInfo,
)<NewSnack>();
export const createSnackFailure = createAction(
  CREATE_SNACK_FAILURE,
  (error) => error,
)<Error>();

export const changeStoreName = createAction(
  CHANGE_STORE_NAME,
  (storeName) => storeName,
)<StoreName>();
export const changeFood = createAction(CHANGE_FOOD, (food) => food)<Food>();
export const changeLocation = createAction(
  CHANGE_LOCATION,
  (location) => location,
)<Location>();
export const changeLocationNum = createAction(
  CHANGE_LOCATION_NUM,
  (locationNum) => locationNum,
)<LocationNum>();

export const changeTime = createAction(CHANGE_TIME, (time: Time) => time)();

export const openForm = createAction(OPEN_FORM)();
export const closeForm = createAction(CLOSE_FORM)();

export const openMap = createAction(OPEN_MAP)();
export const closeMap = createAction(CLOSE_MAP)();

const actions = {
  createSnack,
  createSnackSuccess,
  createSnackFailure,
  changeStoreName,
  changeFood,
  changeLocation,
  changeLocationNum,
  changeTime,
  openForm,
  closeForm,
  openMap,
  closeMap,
};

const createSnackActions = {
  createSnack,
  createSnackSuccess,
  createSnackFailure,
};

type NewSnackAction = ActionType<typeof actions>;
type CreateSnackActions = ActionType<typeof createSnackActions>;
type NewSnackState = NewSnack;

function* createSnackSaga(snackInfo: CreateSnackActions) {
  try {
    const result = yield call(postSnackInfo, snackInfo.payload);
    yield put({ type: CREATE_SNACK_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: CREATE_SNACK_FAILURE, payload: error });
    console.log(error);
  }
}

export function* newSnackSaga() {
  yield takeEvery(CREATE_SNACK, createSnackSaga);
}

const initialState: NewSnackState = {
  storeName: '',
  food: '',
  locationNum: [0, 0],
  location: '',
  time: ['00:00', '00:00'],
  isModalVisible: false,
  isMapVisible: false,
};

export const newSnack = createReducer<NewSnackState, NewSnackAction>(
  initialState,
  {
    [CREATE_SNACK_SUCCESS]: (state, action) => {
      return { ...state, formClose: true };
    },
    [CREATE_SNACK_FAILURE]: (state, action) => ({
      ...state,
    }),
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
);
