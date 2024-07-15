"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fileUploadMiddleware_1 = __importDefault(require("../middleware/fileUploadMiddleware"));
const categoryController_1 = require("../controllers/categoryController");
const validateInputMiddlware_1 = require("../middleware/validateInputMiddlware");
const createCategorySchema_1 = __importDefault(require("../schemas/createCategorySchema"));
const router = (0, express_1.Router)();
router.post('/addCategory', fileUploadMiddleware_1.default.single('image'), (0, validateInputMiddlware_1.validate)(createCategorySchema_1.default), categoryController_1.createCategory);
exports.default = router;
