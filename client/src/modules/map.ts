import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { Map, GeoLocation, Address } from '../types';

const OPEN_MAP = 'map/OPEN_MAP';
const CLOSE_MAP = 'map/CLOSE_MAP';
const CHANGE_GEO_LOCATION = 'map/CHANGE_LOCATION';
const CHANGE_ADDRESS = 'map/CHANGE_LOCATION_NUM';
const INITIALIZE_MAP_INFO = 'map/INITIALIZE_MAP_INFO';

export const openMap = createAction(OPEN_MAP)();
export const closeMap = createAction(CLOSE_MAP)();

export const changeGeoLocation = createAction(
  CHANGE_GEO_LOCATION,
  (geoLocation) => geoLocation,
)<GeoLocation>();

export const changeAddress = createAction(
  CHANGE_ADDRESS,
  (address) => address,
)<Address>();

export const initializeMapInfo = createAction(INITIALIZE_MAP_INFO)();

const actions = {
  openMap,
  closeMap,
  changeGeoLocation,
  changeAddress,
  initializeMapInfo,
};

type MapAction = ActionType<typeof actions>;
type MapState = Map;

const initialState: MapState = {
  isMapVisible: false,
  geoLocation: [0, 0],
  address: '',
};

export const map = createReducer<MapState, MapAction>(initialState, {
  [OPEN_MAP]: (state) => {
    return { ...state, isMapVisible: true };
  },
  [CLOSE_MAP]: (state) => {
    return { ...state, isMapVisible: false };
  },
  [CHANGE_GEO_LOCATION]: (state, { payload: geoLocation }) => ({
    ...state,
    geoLocation,
  }),
  [CHANGE_ADDRESS]: (state, { payload: address }) => ({
    ...state,
    address,
  }),
  [INITIALIZE_MAP_INFO]: (state) => {
    state.geoLocation = initialState.geoLocation;
    state.address = initialState.address;
    return { ...state };
  },
});
