import axios from 'axios';
import { Food, NewSnack } from '../types';

export const postSnackInfo = (snackInfo: any) =>
  axios.post('/api/snack', snackInfo);
export const getAllSnackInfo = () => axios.get('/api/snack');
export const getSelectedSnackInfo = (snackType: Food) =>
  axios.get(`/api/snack/${snackType}`);
