import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { takeEvery, call, put } from 'redux-saga/effects';
import { getAllShopInfo, getSelectedShopInfo } from '../api/shop';
import { Shop, BunchOfShop, Type } from '../types';

const GET_ALL_SHOP = 'shop/GET_ALL_SHOP';
const GET_ALL_SHOP_SUCCESS = 'shop/GET_ALL_SHOP_SUCCESS';
const GET_ALL_SHOP_FAILURE = 'shop/GET_ALL_SHOP_FAILURE';
const GET_SELECTED_SHOP = 'shop/GET_SELECTED_SHOP';
const GET_SELECTED_SHOP_SUCCESS = 'shop/GET_SELECTED_SHOP_SUCCESS';
const GET_SELECTED_SHOP_FAILURE = 'shop/GET_SELECTED_SHOP_FAILURE';

export const getAllShop = createAction(GET_ALL_SHOP)();
export const getAllShopSuccess = createAction(
  GET_ALL_SHOP_SUCCESS,
  (allShop) => allShop,
)<Shop[]>();
export const getAllShopFailure = createAction(
  GET_ALL_SHOP_FAILURE,
  (error) => error,
)<Error>();
export const getSelectedShop = createAction(
  GET_SELECTED_SHOP,
  (selectedType) => selectedType,
)<Type>();
export const getSelectedShopSuccess = createAction(
  GET_SELECTED_SHOP_SUCCESS,
  (selectedShop) => selectedShop,
)<Shop[]>();
export const getSelectedShopFailure = createAction(
  GET_SELECTED_SHOP_FAILURE,
  (error) => error,
)<Error>();

const actions = {
  getAllShop,
  getAllShopSuccess,
  getAllShopFailure,
  getSelectedShop,
  getSelectedShopSuccess,
  getSelectedShopFailure,
};

// 이부분은 내가맘대로만듦....ㅎ.ㅎ
const selectedShopActions = {
  getSelectedShop,
};

type ShopAction = ActionType<typeof actions>;
type SelectedShopAction = ActionType<typeof selectedShopActions>;
type ShopState = BunchOfShop;

// 데이터 얻어오는 거를 payload로 해줘야 리듀서에서 접근해서 사용할수 있더라구요ㅠㅜ
// 제가 잘못쓴걸지도 모르지만 일단은 만들고 수정하겠습니다!
function* getAllShopSaga() {
  try {
    const {
      data: { allShop },
    } = yield call(getAllShopInfo);
    yield put({ type: GET_ALL_SHOP_SUCCESS, payload: allShop });
  } catch (error) {
    yield put({ type: GET_ALL_SHOP_FAILURE, payload: error });
    console.log(error);
  }
}

// 이부분 payload는 실제로 하면서 작성하기
function* getSelectedShopSaga({ payload }: SelectedShopAction) {
  try {
    const {
      data: { selectedShop },
    } = yield call(getSelectedShopInfo, payload);
    yield put({ type: GET_SELECTED_SHOP_SUCCESS, payload: selectedShop });
  } catch (error) {
    yield put({ type: GET_SELECTED_SHOP_FAILURE, payload: error });
    console.log(error);
  }
}
export function* shopSaga() {
  yield takeEvery(GET_ALL_SHOP, getAllShopSaga);
  yield takeEvery(GET_SELECTED_SHOP, getSelectedShopSaga);
}

const initialState: ShopState = {
  severalShop: [],
  type: '',
};

export const shop = createReducer<ShopState, ShopAction>(initialState, {
  [GET_ALL_SHOP_SUCCESS]: (state, { payload }) => {
    state.severalShop = [...payload];
    state.type = '';
    return { ...state };
  },
  [GET_ALL_SHOP_FAILURE]: (state) => {
    return { ...state };
  },
  [GET_SELECTED_SHOP_SUCCESS]: (state, { payload }) => {
    state.severalShop = [...payload];
    state.type = '';
    return { ...state };
  },
  [GET_SELECTED_SHOP_FAILURE]: (state) => {
    return { ...state };
  },
});
