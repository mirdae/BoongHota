import express from 'express';
import { getSelectedSnack, getAllSnacks, postNewSnack } from './controller';

const snackRouter = express.Router();

// api/snack
snackRouter.get('/', getAllSnacks);
snackRouter.post('/', postNewSnack);
snackRouter.get('/:foodType', getSelectedSnack);

export default snackRouter;
