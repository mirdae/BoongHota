import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { postShopInfo } from '../api/shop';
import { Name, Type, Time, GeoLocation, Address, Shop } from '../types';

const CREATE_SHOP = 'form/CREATE_SHOP';
const CREATE_SHOP_SUCCESS = 'form/CREATE_SHOP_SUCCESS';
const CREATE_SHOP_FAILURE = 'form/CREATE_SHOP_FAILURE';

const CHANGE_NAME = 'form/CHANGE_NAME';
const CHANGE_TYPE = 'form/CHANGE_TYPE';
const CHANGE_ADDRESS = 'form/CHANGE_ADDRESS';
const CHANGE_GEO_LOCATION = 'form/CHANGE_GEO_LOCATION';
const CHANGE_TIME = 'form/CHANGE_TIME';

export const createShop = createAction(
  CREATE_SHOP,
  (shopInfo) => shopInfo,
)<Shop>();
export const createShopSuccess = createAction(
  CREATE_SHOP_SUCCESS,
  (shopInfo) => shopInfo,
)<Shop>();
export const createShopFailure = createAction(
  CREATE_SHOP_FAILURE,
  (error) => error,
)<Error>();

export const changeName = createAction(CHANGE_NAME, (name) => name)<Name>();
export const changeType = createAction(CHANGE_TYPE, (type) => type)<Type>();
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
  createShop,
  createShopSuccess,
  createShopFailure,
  changeName,
  changeGeoLocation,
  changeAddress,
  changeType,
  changeTime,
};

const createShopActions = {
  createShop,
  createShopSuccess,
  createShopFailure,
};

type FormAction = ActionType<typeof actions>;
type CreateShopActions = ActionType<typeof createShopActions>;
type FormState = Shop;

function* createShopSaga(shopInfo: CreateShopActions) {
  const { payload } = shopInfo;
  try {
    const result = yield call(postShopInfo, payload);
    yield put({ type: CREATE_SHOP_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: CREATE_SHOP_FAILURE, payload: error });
    console.log(error);
  }
}

export function* formSaga() {
  yield takeLatest(CREATE_SHOP, createShopSaga);
}

const initialState: FormState = {
  name: '',
  type: '',
  geoLocation: [0, 0],
  address: '',
  time: ['00:00', '00:00'],
};

export const form = createReducer<FormState, FormAction>(initialState, {
  [CREATE_SHOP_SUCCESS]: (state, action) => {
    return { ...state };
  },
  [CREATE_SHOP_FAILURE]: (state, action) => ({
    ...state,
  }),
  [CHANGE_NAME]: (state, { payload: name }) => ({
    ...state,
    name,
  }),
  [CHANGE_TYPE]: (state, { payload: type }) => ({
    ...state,
    type,
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
