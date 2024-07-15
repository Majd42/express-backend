import mongoose from "mongoose";
import { IProduct } from "../types";



const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
        minLength: 3,
        maxLength: 255,
    },
    Description: {
        type: String,
        required: true, 
        minLength: 3, 
        maxLength :255
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Category"
    },
    gallery: [String],
    price: {
        type: Number,
        required: true

    },
    discount: {
        type: Number,
    },

}, {timestamps: true})

const ProductModel = mongoose.model<IProduct>('Product', ProductSchema)
export default ProductModel