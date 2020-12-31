import { GeoLocation, Address } from './shop';

export type IsMapVisible = boolean;

export type Map = {
  isMapVisible: IsMapVisible;
  geoLocation: GeoLocation;
  address: Address;
};
