import axios from 'axios';

export const postSnackInfo = (snackInfo) => axios.post('/api/snack', snackInfo);
