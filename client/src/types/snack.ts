export type StoreName = string;
export type StoreType = 'boong' | 'ho' | 'ta' | '';
export type GeoLocation = [number, number];
export type Address = string;
export type Time = [string, string];

export type Snack = {
  _id?: string;
  _v?: number;
  storeName: StoreName;
  storeType: StoreType;
  geoLocation: GeoLocation;
  address: Address;
  time: Time;
};

export type Snacks = Snack[];

export type SnackStores = {
  stores: Snacks;
  storeType: StoreType;
};
