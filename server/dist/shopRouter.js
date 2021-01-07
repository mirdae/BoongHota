"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const shopRouter = express_1.default.Router();
// api/snack
shopRouter.get('/', controller_1.getAllShop);
shopRouter.post('/', controller_1.postNewShop);
shopRouter.get('/:shopType', controller_1.getSelectedShop);
exports.default = shopRouter;
