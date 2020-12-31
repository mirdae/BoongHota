import axios from 'axios';
import { Type } from '../types';

export const postShopInfo = (shopInfo: any) =>
  axios.post('/api/shop', shopInfo);
export const getAllShopInfo = () => axios.get('/api/shop');
export const getSelectedShopInfo = (shopType: Type) =>
  axios.get(`/api/snack/${shopType}`);
