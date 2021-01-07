"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postNewShop = exports.getSelectedShop = exports.getAllShop = void 0;
const Shop_1 = __importDefault(require("./model/Shop"));
const getAllShop = async (_, res) => {
    try {
        const allShop = await Shop_1.default.find({});
        return res.status(200).json({ result: true, allShop });
    }
    catch (error) {
        console.log(error);
        return res
            .status(400)
            .json({ result: false, message: '데이터를 얻어오지 못했습니다.' });
    }
};
exports.getAllShop = getAllShop;
const getSelectedShop = async (req, res) => {
    const { params: { shopType } } = req;
    try {
        const selectedShop = await Shop_1.default.find({ type: shopType }).exec();
        return res.status(200).json({ result: true, selectedShop });
    }
    catch (error) {
        console.log(error);
        return res
            .status(400)
            .json({ result: false, message: '데이터를 얻어오지 못했습니다.' });
    }
};
exports.getSelectedShop = getSelectedShop;
const postNewShop = async (req, res) => {
    const { body: { name, type, geoLocation, address, time } } = req;
    console.log('여기까지 옴?');
    try {
        const newShop = await Shop_1.default.create({
            name,
            type,
            geoLocation,
            address,
            time
        });
        return res.status(201).json({ result: true, newShop });
    }
    catch (error) {
        console.log(error);
        return res
            .status(400)
            .json({ result: false, message: '데이터 생성에 실패했습니다' });
    }
};
exports.postNewShop = postNewShop;
