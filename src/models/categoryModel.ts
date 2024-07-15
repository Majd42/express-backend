import mongoose from "mongoose";
import { ICategory } from "../types";




const CategorySchema = new mongoose.Schema({
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
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
   },

}, {timestamps: true})

const CategoryModel = mongoose.model<ICategory>("Category", CategorySchema)
export default CategoryModel



