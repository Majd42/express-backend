import CategoryModel from "../models/categoryModel"
import ProductModel from "../models/productModel"
import { addProductParams, updateProductParams } from "../types"

export const getAllProductsService = async() => {
    const products = await ProductModel.find()
    if(!products) return null
    return products
}

export const deleteAllProductsService= async() => {
    await ProductModel.deleteMany()
}
export const addProductService = async ({title,description,categoryId, gallery, price}: addProductParams) => {

    const category = await CategoryModel.findById(categoryId)

    if(!category) return null

    const addedProduct = await ProductModel.create({
        title,
        description,
        gallery,
        categoryId: category._id,
        price
    })

    if(!addedProduct) return null
    return addedProduct
}



export const updateProductService = async ({id}: updateProductParams) => {
    const updatedProduct = await ProductModel.findOneAndUpdate({_id: id})

    if (!updatedProduct) return null
    return updatedProduct
}