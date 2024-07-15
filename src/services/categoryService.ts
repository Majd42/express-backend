import fs from 'fs'

import { CreateCategoryParams, deleteCategoryParams, getCategoryParams, UpdateCategoryParams } from "../types";
import CategoryModel from "../models/categoryModel";
import path from 'path';
import { serviceLogger } from '../loggers';

export const createCategoryService = async({title, description, parentCategory, image}: CreateCategoryParams) => {

    const parentCategoryId = await CategoryModel.findOne({title: parentCategory})
  
    const category = await CategoryModel.create({
        title,
        image,
        parentCategoy: parentCategoryId || null,
        description

    })
    if(!category) return null

    return category
}


export const getParentCategoriesService = async () => {
    const parentCategories = await CategoryModel.find({parentCategoy: null})
    return parentCategories
}

export const updateCategoryService = async ({id, title, description, image, parentCategory}: UpdateCategoryParams) => {

    const foundCategory = await CategoryModel.findById(id)
    if(!foundCategory || (!title && !description && !image)) return null
    
    if(image) {
        const filePath = path.join(__dirname, '..','..','public',path.basename(foundCategory.image))
        fs.unlink(filePath, (err) => {
            if(err) {
                serviceLogger(err)
            }
        })
    }
    const updatedCategory = await CategoryModel.updateOne({_id: foundCategory.id} , {$set: {
        title,
        description, 
        image,
        parentCategory: parentCategory? parentCategory : null
    }})


    return updatedCategory
    
}

export const getAllCategoriesService = async () => {
    const categories = await CategoryModel.find()

    return categories
}

export const deleteAllCategoriesService = async() => {
     await CategoryModel.deleteMany()
}


export const getCategoryByIdService = async({id}: getCategoryParams) => {

    const category = await CategoryModel.findById(id)
    if(!category) return null
    return category
}


export const deleteCategoryById = async({id}: deleteCategoryParams) => {
    const result = await CategoryModel.findOneAndDelete({_id: id})
    serviceLogger(result)
    return result
}