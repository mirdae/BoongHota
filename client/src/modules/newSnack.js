import { createAction, handleActions } from 'redux-actions';
import { takeLatest, takeEvery } from 'redux-saga/effects';

const CREATE_SNACK = 'newSnack/CREATE_SNACK';
const CREATE_SNACK_SUCCESS = 'newSnack/CREATE_SNACK_SUCCESS';
const CREATE_SNACK_FAILURE = 'newSnack/CREATE_SNACK_FAILURE';

const CHANGE_TITLE = 'newSnack/CHANGE_TITLE';
const CHANGE_FOOD = 'newSnack/CHANGE_FOOD';
const CHANGE_LOCATION = 'newSnack/CHANGE_LOCATION';
const CHANGE_LOCATION_NUM = 'newSnack/CHANGE_LOCATION_NUM';
const CHANGE_TIME = 'newSnack/CHANGE_TIME';
const CLOSE_FORM = 'newSnack/CLOSE_FORM';
const OPEN_FORM = 'newSnack/OPEN_FORM';
const OPEN_MAP = 'newSnack/OPEN_MAP';
const CLOSE_MAP = 'newSnack/CLOSE_MAP';

export const createSnack = createAction(CREATE_SNACK, (snackInfo) => snackInfo);
export const changeTitle = createAction(CHANGE_TITLE, (title) => title);
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

function* createSnackSaga() {
  yield console.log('여기까지 왔는교?');
}

export function* newSnackSaga() {
  yield takeLatest(CREATE_SNACK, createSnackSaga);
}

const initialState = {
  title: '',
  food: '',
  locationNum: [0, 0],
  location: '',
  time: ['00:00', '00:00'],
  isModalVisible: false,
  isMapVisible: false,
};

export const newSnack = handleActions(
  {
    [CREATE_SNACK_SUCCESS]: (state) => ({ ...state, formClose: true }),
    [CREATE_SNACK_FAILURE]: (state, payload) => ({ ...state }),
    [CHANGE_TITLE]: (state, { payload: title }) => ({
      ...state,
      title,
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
