import axios from 'axios';
import { StoreType } from '../types';

export const postSnackInfo = (storeInfo: any) =>
  axios.post('/api/snack', storeInfo);
export const getAllSnackInfo = () => axios.get('/api/snack');
export const getSelectedSnackInfo = (storeType: StoreType) =>
  axios.get(`/api/snack/${storeType}`);
