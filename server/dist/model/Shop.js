"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const shopSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ['boong', 'ho', 'ta'], required: true },
    geoLocation: { type: Array, required: true },
    address: { type: String, required: true },
    time: { type: Array, required: true }
});
const model = mongoose_1.default.model('Shop', shopSchema);
exports.default = model;
