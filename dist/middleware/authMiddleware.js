"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = __importDefault(require("../models/userModel"));
const loggers_1 = require("../loggers");
const authenticateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.replace('Bearer', '').trim();
        // middlewareLogger(token)
        if (!token) {
            return res.status(200).json({
                status: 400,
                data: {},
                message: "invalid request",
                success: false
            });
        }
        const decodedUser = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "secret");
        // middlewareLogger(verified, 'verified')
        const user = yield userModel_1.default.findById(decodedUser.id);
        if (!user) {
            return res.status(400).send({
                status: 400,
                success: false,
                data: {},
                message: "user not found"
            });
        }
        req.user = user;
        next();
        // next()
    }
    catch (error) {
        (0, loggers_1.middlewareLogger)('server error', error);
        return res.status(200).json({
            status: 500,
            data: {},
            success: false,
            message: `server error :${error}`
        });
    }
});
exports.authenticateToken = authenticateToken;
