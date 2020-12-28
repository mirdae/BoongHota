export type StoreName = string;
export type Food = 'boong' | 'ho' | 'ta' | '';
export type LocationNum = [number, number];
export type Location = string;
export type Time = [string, string];

export type Snack = {
  id: number;
  storeName: StoreName;
  food: Food;
  locationNum: LocationNum;
  location: Location;
  time: Time;
};

export type Snacks = Snack[];
