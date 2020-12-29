import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { takeEvery, call, put } from 'redux-saga/effects';
import { getAllSnackInfo, getSelectedSnackInfo } from '../api/snack';
import { Snack, Food } from '../types';

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
)<Food>();
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

type SnacksAction = ActionType<typeof actions>;
type SelectedSnacksAction = ActionType<typeof selectedSnackActions>;
type SnacksState = {
  snacks: Snack[];
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

function* selectedSnackSaga({ payload }: SelectedSnacksAction) {
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

const initialState: SnacksState = {
  snacks: [],
};

// 보내는 가게 정보 1개
// form : {
//    storeName: 
// sdfl;jkl
// sdflkj
// sdflk

// }

// 불러오는 가게 정보(들) 여러 개 
// snackStores : {
//  stores: [{asdf,asdkfj,}, {ㅁㅇㄴㄹ, ㅁㄴㅇㄹ,}]
//  storeType: 'boong'
// }

// Map
// map : {
  
// }

// Modal 
// modal: {
//   isVisible: true,
// }


export const snacks = createReducer<SnacksState, SnacksAction>(initialState, {
  [ALL_SNACKS_SUCCESS]: (state, { payload }) => {
    const {
      data: { allSnacks, },
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
