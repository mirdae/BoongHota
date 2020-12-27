import express from 'express';
import { allSnacks, selectSnack } from './controller';

const snackRouter = express.Router();

// api/snack
snackRouter.get('/', allSnacks);
snackRouter.get('/:id', selectSnack);

export default snackRouter;
