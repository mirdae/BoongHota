export type Name = string;
export type Type = 'boong' | 'ho' | 'ta';
export type GeoLocation = [number, number];
export type Address = string;
export type Time = [string, string];

export type Shop = {
  name: Name;
  type: Type;
  geoLocation: GeoLocation;
  address: Address;
  time: Time;
};
