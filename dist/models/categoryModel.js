"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CategorySchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 255
    },
    description: {
        type: String,
        required: true,
        maxLength: 255
    },
    image: {
        type: String,
        required: true,
        maxLength: 255
    },
    parentCategory: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Category"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});
const CategoryModel = mongoose_1.default.model("Category", CategorySchema);
exports.default = CategoryModel;
