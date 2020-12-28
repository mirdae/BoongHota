export type newSnack = {
  storeName: string;
  food: 'boong' | 'ho' | 'ta' | '';
  locationNum: [number, number];
  location: string;
  time: [string, string];
  isModalVisible: boolean;
  isMapVisible: boolean;
  formClose?: boolean;
};
