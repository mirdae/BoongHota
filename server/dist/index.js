"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const shopRouter_1 = __importDefault(require("./shopRouter"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const helmet_csp_1 = __importDefault(require("helmet-csp"));
require("./db");
const app = express_1.default();
const PORT = process.env.PORT || 5000;
app.use(helmet_1.default());
app.use(helmet_csp_1.default({
    directives: {
        defaultSrc: ['*'],
        scriptSrc: ['*'],
        imgSrc: ['*'],
        styleSrc: ['*', "'unsafe-inline'"],
    },
}));
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, '../../client/build')));
app.use('/api/shop', shopRouter_1.default);
app.use((req, res) => {
    console.log(path_1.default.join(__dirname, '../../client/build/index.html'));
    res.sendFile(path_1.default.join(__dirname, '../../client/build/index.html'));
});
app.listen(PORT, () => {
    console.log(`✅ Listening on port: ${PORT}`);
});
