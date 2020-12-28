export type snack = {
  id: number;
  storeName: string;
  food: 'boong' | 'ho' | 'ta' | '';
  locationNum: [number, number];
  location: string;
  time: [string, string];
};

export type snacks = snack[];
