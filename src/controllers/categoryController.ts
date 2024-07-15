import { Request, Response } from "express";
import { createCategoryService, deleteAllCategoriesService, deleteCategoryById, getAllCategoriesService, getCategoryByIdService, updateCategoryService } from "../services/categoryService";
import { controllerLogger } from "../loggers";

export const createCategory = async(req: Request, res: Response) => {
    try {
        
        const image = req.body.image
        const {title, description, parentCategory} = req.body
        const category = await createCategoryService({title, image, description, parentCategory: parentCategory || null })
        if(!category) {
            return res.status(200).json({
                status: 400,
                success: false,
                data: {},
                message: "invalid request"
            })
        }

        return res.status(200).json({
                status: 200,
                success: false,
                data: {category},
                message: "success"
            })

    } catch (error) {
         return res.status(200).json({
                status: 500,
                success: false,
                data: {},
                message: `server error: ${error}`
            })
    }
}


export const getAllCategories = async(req: Request, res: Response) => { 
    try {

        controllerLogger(req.body, 'hiiii')
        const categories = await getAllCategoriesService()

        
       return res.status(200).json({
                status: 200,
                success: true,
                data: {categories},
                message: 'success'
            })
    } catch (error) {
         return res.status(200).json({
                status: 500,
                success: false,
                data: {},
                message: `server error: ${error}`
            })
    }
}


export const updateCategory = async(req:Request, res: Response) => {

  
    try {
        const {title, description, id, image, parentCategory} = req.body
  
    const updatedCategory = await updateCategoryService({title, description, id, image, parentCategory})
    if(!updatedCategory) return res.status(200).json({
        status: 400,
        success: false,
        data: {},
        message: "invalid request"
    })

 
    return res.status(200).json({
        status: 200,
        success: true,
        data: {updatedCategory},
        message: "success"
    })
    } catch (error) {
          return res.status(200).json({
                status: 500,
                success: false,
                data: {},
                message: `server error: ${error}`
            })
    }
}


export const getCategoryById = async(req: Request, res:Response) => { 
    try {
        const id = req.params.id
        const category = await getCategoryByIdService({id})
        if(!category) return res.status(200).json({
        status: 400,
        success: false,
        data: {},
        message: "invalid request"
    })
 
    return res.status(200).json({
        status: 200,
        success: true,
        data: {category},
        message: "success"
    })
    } catch (error) {
         return res.status(200).json({
                status: 500,
                success: false,
                data: {},
                message: `server error: ${error}`
            })
    }
}

export const deleteAllCategories= async(req: Request, res: Response) => {
    try {
        await deleteAllCategoriesService()
        return res.status(200).json({
            status: 200,
            success: true,
            data: {},
            message: "success"
        })
    } catch (error) {
         return res.status(200).json({
                status: 500,
                success: false,
                data: {},
                message: `server error: ${error}`
            }) 
    }
}


export const deleteCategory = async(req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await deleteCategoryById({id})

        if(!result) res.status(200).json({
            status: 400,
            success: false,
            data: {},
            message: 'failed to delete, invalid request'
        })
        return res.status(200).json({
            status: 200,
            success: true, 
            data:{},
            message: 'success'
        })
    } catch (error) {
           return res.status(200).json({
                status: 500,
                success: false,
                data: {},
                message: `server error: ${error}`
            }) 
    }
}