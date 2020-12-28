import axios from 'axios';

export const postSnackInfo = (snackInfo) => axios.post('/api/snack', snackInfo);
export const getAllSnackInfo = () => axios.get('/api/snack');
export const getSelectedSnackInfo = (snack) => axios.get(`/api/snack/${snack}`);
