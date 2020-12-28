import express from 'express';
import { getSelectedSnack, getAllSnacks, postNewSnack } from './controller';

const snackRouter = express.Router();

// api/snack
snackRouter.get('/:id', getSelectedSnack);
snackRouter.get('/', getAllSnacks);
snackRouter.post('/', postNewSnack);

export default snackRouter;
