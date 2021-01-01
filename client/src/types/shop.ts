export type Name = string;
export type Type = 'boong' | 'ho' | 'ta' | '';
export type GeoLocation = [number, number];
export type Address = string;
export type Time = [string, string];

export type Shop = {
  _id?: string;
  _v?: number;
  name: Name;
  type: Type;
  geoLocation: GeoLocation;
  address: Address;
  time: Time;
};

//하아..이부분은 이름을 뭐라고할지 모르겠어서 이렇게해놓을게유...
export type BunchOfShop = {
  severalShop: Shop[];
  type: Type;
};
