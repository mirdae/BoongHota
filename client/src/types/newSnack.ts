import { StoreName, Food, Location, LocationNum, Time } from '../types/snacks';

export type NewSnack = {
  storeName: StoreName;
  food: Food;
  locationNum: LocationNum;
  location: Location;
  time: Time;
  isModalVisible: boolean;
  isMapVisible: boolean;
  formClose?: boolean;
};