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
exports.createCategory = void 0;
const categoryService_1 = require("../services/categoryService");
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const image = req.body.image;
        const { title, description, parentCategory } = req.body;
        const category = yield (0, categoryService_1.createCategoryService)({ title, image, description, parentCategory: parentCategory || null });
        if (!category) {
            return res.status(200).json({
                status: 400,
                success: false,
                data: {},
                message: "invalid request"
            });
        }
        return res.status(200).json({
            status: 200,
            success: false,
            data: { category },
            message: "invalid request"
        });
    }
    catch (error) {
        return res.status(200).json({
            status: 500,
            success: false,
            data: {},
            message: `server error: ${error}`
        });
    }
});
exports.createCategory = createCategory;
