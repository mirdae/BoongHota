import express from 'express';
import { getSelectedShop, getAllShop, postNewShop } from './controller';

const shopRouter = express.Router();

// api/snack
shopRouter.get('/', getAllShop);
shopRouter.post('/', postNewShop);
shopRouter.get('/:shopType', getSelectedShop);

export default shopRouter;
