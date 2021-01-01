import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { Map, GeoLocation, Address } from '../types';

const TOGGLE_MAP = 'map/TOGGLE_MAP';
const CHANGE_GEO_LOCATION = 'map/CHANGE_LOCATION';
const CHANGE_ADDRESS = 'map/CHANGE_LOCATION_NUM';

export const toggleMap = createAction(TOGGLE_MAP)();

export const changeGeoLocation = createAction(
  CHANGE_GEO_LOCATION,
  (geoLocation) => geoLocation,
)<GeoLocation>();

export const changeAddress = createAction(
  CHANGE_ADDRESS,
  (address) => address,
)<Address>();

const actions = {
  toggleMap,
  changeGeoLocation,
  changeAddress,
};

type MapAction = ActionType<typeof actions>;
type MapState = Map;

const initialState: MapState = {
  isMapVisible: false,
  geoLocation: [0, 0],
  address: '',
};

export const map = createReducer<MapState, MapAction>(initialState, {
  [TOGGLE_MAP]: (state) => {
    return { ...state, isMapVisible: !state.isMapVisible };
  },
  [CHANGE_GEO_LOCATION]: (state, { payload: geoLocation }) => ({
    ...state,
    geoLocation,
  }),
  [CHANGE_ADDRESS]: (state, { payload: address }) => ({
    ...state,
    address,
  }),
});
