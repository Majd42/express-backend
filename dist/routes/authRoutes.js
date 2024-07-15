"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const validateInputMiddlware_1 = require("../middleware/validateInputMiddlware");
const signupSchema_1 = __importDefault(require("../schemas/signupSchema"));
const signinSchema_1 = __importDefault(require("../schemas/signinSchema"));
const router = (0, express_1.Router)();
router.post('/signup', (0, validateInputMiddlware_1.validate)(signupSchema_1.default), authController_1.signup);
router.post('/signin', (0, validateInputMiddlware_1.validate)(signinSchema_1.default), authController_1.signin);
exports.default = router;
