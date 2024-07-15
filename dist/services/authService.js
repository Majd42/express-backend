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
exports.signinService = exports.signupService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = __importDefault(require("../models/userModel"));
const signupService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ username, email, password }) {
    const existingUser = yield userModel_1.default.findOne({ email });
    if (existingUser)
        return null;
    const salt = yield bcryptjs_1.default.genSalt();
    const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
    const user = yield userModel_1.default.create({
        email,
        password: hashedPassword,
        username,
    });
    return user;
});
exports.signupService = signupService;
const signinService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, password }) {
    const user = yield userModel_1.default.findOne({ email });
    if (!user)
        return null;
    const matched = yield bcryptjs_1.default.compare(password, user.password);
    if (!matched)
        return null;
    const token = jsonwebtoken_1.default.sign({ email: user.email, id: user._id }, process.env.JWT_SECERT || "secret");
    return token;
});
exports.signinService = signinService;
