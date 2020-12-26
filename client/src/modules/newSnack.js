import { createAction, handleActions } from 'redux-actions';
import { takeLatest, takeEvery } from 'redux-saga/effects';

const CREATE_SNACK = 'newSnack/CREATE_SNACK';
const CREATE_SNACK_SUCCESS = 'newSnack/CREATE_SNACK_SUCCESS';
const CREATE_SNACK_FAILURE = 'newSnack/CREATE_SNACK_FAILURE';

const CHANGE_TITLE = 'newSnack/CHANGE_TITLE';
const CHANGE_FOOD = 'newSnack/CHANGE_FOOD';
const CHANGE_LOCATION = 'newSnack/CHANGE_LOCATION';
const CHANGE_TIME = 'newSnack/CHANGE_TIME';
const CLOSE_FORM = 'newSnack/CLOSE_FORM';
const OPEN_FORM = 'newSnack/OPEN_FORM';

export const createSnack = createAction(CREATE_SNACK, (snackInfo) => snackInfo);
export const changeTitle = createAction(CHANGE_TITLE, (title) => title);
export const changeFood = createAction(CHANGE_FOOD, (food) => food);
export const changeLocation = createAction(
  CHANGE_LOCATION,
  (location) => location,
);

export const changeTime = createAction(CHANGE_TIME, (time) => time);
export const closeForm = createAction(CLOSE_FORM);
export const openForm = createAction(OPEN_FORM);

function* createSnackSaga(snackInfo) {
  yield console.log('여기까지 왔는교?');
  yield console.log(snackInfo);
}

export function* newSnackSaga() {
  yield takeLatest(CREATE_SNACK, createSnackSaga);
}

const initialState = {
  title: '',
  food: '',
  location: [0, 0, ''],
  time: ['00:00', '00:00'],
  isModalVisible: true,
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
    [CHANGE_TIME]: (state, { payload: time }) => ({ ...state, time }),
    [CLOSE_FORM]: (state) => ({
      ...state,
      isModalVisible: false,
    }),
    [OPEN_FORM]: () => ({
      ...initialState,
    }),
  },
  initialState,
);
