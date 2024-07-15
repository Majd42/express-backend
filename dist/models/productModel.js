"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ImageSchema = new mongoose_1.default.Schema({
    url: {
        type: String,
        required: true,
        maxLength: 255
    },
    alt: {
        type: String,
        required: true,
        maxLength: 255
    },
});
const ProductSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 255,
    },
    Description: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 255
    },
    category: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "Category"
    },
    gallery: [exports.ImageSchema],
    price: {
        type: Number,
        require: true
    },
    discount: {
        type: Number,
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
const ProductModel = mongoose_1.default.model('Product', ProductSchema);
exports.default = ProductModel;
