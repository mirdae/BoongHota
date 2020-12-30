import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { takeEvery, call, put } from 'redux-saga/effects';
import { getAllSnackInfo, getSelectedSnackInfo } from '../api/snack';
import { Snacks, SnackStores, StoreType } from '../types';

const GET_ALL_SNACKS = 'snackStores/GET_ALL_SNACKS';
const GET_ALL_SNACKS_SUCCESS = 'snackStores/GET_ALL_SNACKS_SUCCESS';
const GET_ALL_SNACKS_FAILURE = 'snackStores/GET_ALL_SNACKS_FAILURE';
const GET_SELECTED_SNACK = 'snackStores/GET_SELECTED_SNACK';
const GET_SELECTED_SNACK_SUCCESS = 'snackStores/GET_SELECTED_SNACK_SUCCESS';
const GET_SELECTED_SNACK_FAILURE = 'snackStores/GET_SELECTED_SNACK_FAILURE';

export const getAllSnacks = createAction(GET_ALL_SNACKS)();
export const getAllSnacksSuccess = createAction(
  GET_ALL_SNACKS_SUCCESS,
  (allSnackStores) => allSnackStores,
)<Snacks>();
export const getAllSnacksFailure = createAction(
  GET_ALL_SNACKS_FAILURE,
  (error) => error,
)<Error>();
export const getSelectedSnack = createAction(
  GET_SELECTED_SNACK,
  (selectedStoreType) => selectedStoreType,
)<StoreType>();
export const getSelectedSnackSuccess = createAction(
  GET_SELECTED_SNACK_SUCCESS,
  (selectedSnackStores) => selectedSnackStores,
)<Snacks>();
export const getSelectedSnackFailure = createAction(
  GET_SELECTED_SNACK_FAILURE,
  (error) => error,
)<Error>();

const actions = {
  getAllSnacks,
  getAllSnacksSuccess,
  getAllSnacksFailure,
  getSelectedSnack,
  getSelectedSnackSuccess,
  getSelectedSnackFailure,
};

// 이부분은 내가맘대로만듦....ㅎ.ㅎ
const selectedSnackActions = {
  getSelectedSnack,
};

type SnackStoresAction = ActionType<typeof actions>;
type SelectedSnacksAction = ActionType<typeof selectedSnackActions>;
type SnackStoresState = {
  stores: Snacks;
  storeType: '';
};

// 데이터 얻어오는 거를 payload로 해줘야 리듀서에서 접근해서 사용할수 있더라구요ㅠㅜ
// 제가 잘못쓴걸지도 모르지만 일단은 만들고 수정하겠습니다!
function* getAllSnackskSaga() {
  try {
    const {
      data: { snackStores },
    } = yield call(getAllSnackInfo);
    yield put({ type: GET_ALL_SNACKS_SUCCESS, payload: snackStores });
  } catch (error) {
    yield put({ type: GET_ALL_SNACKS_FAILURE, payload: error });
    console.log(error);
  }
}

// 이부분 payload는 실제로 하면서 작성하기
function* getSelectedSnackSaga({ payload }: SelectedSnacksAction) {
  try {
    const {
      data: { snackStores },
    } = yield call(getSelectedSnackInfo, payload);
    yield put({ type: GET_SELECTED_SNACK_SUCCESS, payload: snackStores });
  } catch (error) {
    yield put({ type: GET_SELECTED_SNACK_FAILURE, payload: error });
    console.log(error);
  }
}
export function* snackStoresSaga() {
  yield takeEvery(GET_ALL_SNACKS, getAllSnackskSaga);
  yield takeEvery(GET_SELECTED_SNACK, getSelectedSnackSaga);
}

const initialState: SnackStoresState = {
  stores: [],
  storeType: '',
};

export const snackStores = createReducer<SnackStoresState, SnackStoresAction>(
  initialState,
  {
    [GET_ALL_SNACKS_SUCCESS]: (state, { payload }) => {
      state.stores = [...payload];
      state.storeType = '';
      return { ...state };
    },
    [GET_ALL_SNACKS_FAILURE]: (state) => {
      return { ...state };
    },
    [GET_SELECTED_SNACK_SUCCESS]: (state, { payload }) => {
      state.stores = [...payload];
      state.storeType = '';
      return { ...state };
    },
    [GET_SELECTED_SNACK_FAILURE]: (state) => {
      return { ...state };
    },
  },
);
