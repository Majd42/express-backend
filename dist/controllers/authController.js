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
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = exports.signup = void 0;
const loggers_1 = require("../loggers");
const authService_1 = require("../services/authService");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, email } = req.body;
        const user = yield (0, authService_1.signupService)({ username, email, password });
        if (!user) {
            return res.status(200).json({
                status: 400,
                data: {},
                message: "failed to signup, invalid request",
                success: false
            });
        }
        return res.status(200).json({
            success: true,
            data: { user },
            message: "user created successfully",
            status: 200
        });
    }
    catch (error) {
        (0, loggers_1.controllerLogger)(error);
        return res.status(200).json({
            status: 500,
            success: false,
            message: `somthing went wrong: ${error}`,
            data: {}
        });
    }
});
exports.signup = signup;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const token = yield (0, authService_1.signinService)({ email, password });
        if (!token) {
            return res.status(200).json({
                status: 400,
                success: false,
                data: {},
                message: "invalid credentials"
            });
        }
        return res.status(200).json({
            status: 200,
            success: true,
            data: token,
            message: 'signed in successfully '
        });
    }
    catch (error) {
        (0, loggers_1.controllerLogger)(error);
        return res.status(200).json({
            status: 500,
            success: false,
            message: `somthing went wrong: ${error}`,
            data: {}
        });
    }
});
exports.signin = signin;
