import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { takeEvery, call, put } from 'redux-saga/effects';
import { getAllSnackInfo, getSelectedSnackInfo } from '../api/snack';
import { snack } from '../types';

const ALL_SNACKS = 'newSnack/ALL_SNACKS';
const ALL_SNACKS_SUCCESS = 'newSnack/ALL_SNACKS_SUCCESS';
const ALL_SNACKS_FAILURE = 'newSnack/ALL_SNACKS_FAILURE';
const SELECTED_SNACK = 'newSnack/SELECTED_SNACK';
const SELECTED_SNACK_SUCCESS = 'newSnack/SELECTED_SNACK_SUCCESS';
const SELECTED_SNACK_FAILURE = 'newSnack/SELECTED_SNACK_FAILURE';

export const allSnacks = createAction(ALL_SNACKS)();
export const allSnacksSuccess = createAction(
  ALL_SNACKS_SUCCESS,
  (snacks) => snacks,
)();
export const allSnacksFailure = createAction(
  ALL_SNACKS_FAILURE,
  (error) => error,
)<Error>();
export const selectedSnack = createAction(
  SELECTED_SNACK,
  (snackType) => snackType,
)<'boong' | 'ho' | 'ta' | ''>();
export const selectedSnackSuccess = createAction(
  SELECTED_SNACK_SUCCESS,
  (snackInfo) => snackInfo,
)();
export const selectedSnackFailure = createAction(
  SELECTED_SNACK_FAILURE,
  (error) => error,
)<Error>();

const actions = {
  allSnacks,
  allSnacksSuccess,
  allSnacksFailure,
  selectedSnack,
  selectedSnackSuccess,
  selectedSnackFailure,
};

const selectedSnackActions = {
  selectedSnack,
  selectedSnackSuccess,
  selectedSnackFailure,
};

type snacksAction = ActionType<typeof actions>;
type selectedSnacksAction = ActionType<typeof selectedSnackActions>;
type snacksState = {
  snacks: snack[];
};

function* allSnackSaga() {
  try {
    const result = yield call(getAllSnackInfo);
    yield put({ type: ALL_SNACKS_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: ALL_SNACKS_FAILURE, payload: error });
    console.log(error);
  }
}

function* selectedSnackSaga({ payload }: selectedSnacksAction) {
  try {
    const result = yield call(getSelectedSnackInfo, payload);
    yield put({ type: SELECTED_SNACK_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: SELECTED_SNACK_FAILURE, payload: error });
    console.log(error);
  }
}
export function* snacksSaga() {
  yield takeEvery(ALL_SNACKS, allSnackSaga);
  yield takeEvery(SELECTED_SNACK, selectedSnackSaga);
}

const initialState: snacksState = {
  snacks: [],
};

export const snacks = createReducer<snacksState, snacksAction>(initialState, {
  [ALL_SNACKS_SUCCESS]: (state, { payload }) => {
    const {
      data: { allSnacks },
    } = payload;
    return { snacks: allSnacks };
  },
  [ALL_SNACKS_FAILURE]: (state) => {
    return { ...state };
  },
  [SELECTED_SNACK_SUCCESS]: (state, { payload }) => {
    console.log(payload);
    const {
      data: { selectedSnack },
    } = payload;
    return { snacks: selectedSnack };
  },
  [SELECTED_SNACK_FAILURE]: (state) => {
    return { ...state };
  },
});
