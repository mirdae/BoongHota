import express from 'express';
import { allSnacks, selectSnack, newSnack } from './controller';

const snackRouter = express.Router();

// api/snack
snackRouter.get('/:id', selectSnack);
snackRouter.get('/', allSnacks);
snackRouter.post('/', newSnack);

export default snackRouter;
