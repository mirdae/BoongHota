import { GeoLocation, Address } from './snack';

export type IsMapVisible = boolean;

export type Map = {
  isMapVisible: IsMapVisible;
  geoLocation: GeoLocation;
  address: Address;
};
