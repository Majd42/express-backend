import { Request, Response } from "express";
import { addProductService, deleteAllProductsService, getAllProductsService, updateProductService } from "../services/productService";

export const getAllProducts = async(req:Request, res:Response) => {
    try {
        const products = await getAllProductsService()
        if(!products) return res.status(200).json({
            status: 400,
            success: false,
            data: {},
            message: 'invalid request'
        })

        return res.status(200).json({
            status: 200,
            success: true,
            data: {products},
            message: 'success'
        })
    } catch (error) {
        return res.status(200).json({
            status: 500,
            success: false,
            data: {},
            message: `server error ${error}`
        })
    }
}



export const addProduct = async(req: Request, res: Response) => {
    try {
        // console.log(req.body)
        const {title, description, price, images, categoryId} = req.body
        const product = await addProductService({title, description, price, categoryId,gallery: images })
        if(!product) return res.status(200).json({
            status:400,
            success: false, 
            data: {},
            message: "invalid request "
        })
        
        return res.status(200).json({
            status:200,
            success: true, 
            data: {},
            message: "success"
        })
    } catch (error) {
     return res.status(200).json({
            status: 500,
            success: false,
            data: {},
            message: `server error ${error}`
        })
    }
} 


export const deleteAllProducts = async(req: Request, res: Response) => {
    try {
        await deleteAllProductsService()
         return res.status(200).json({
            status: 200,
            success: false,
            data: {},
            message: 'success'
        })
    } catch (error) {
          return res.status(200).json({
            status: 500,
            success: false,
            data: {},
            message: `server error ${error}`
        })
    }
}


export const updateProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const updatedProduct = await updateProductService({id})
        if(!updateProduct)return res.status(200).json({
            status: 200,
            success: false,
            data: {updatedProduct},
            message: 'success'
        })
    } catch (error) {
         return res.status(200).json({
            status: 500,
            success: false,
            data: {},
            message: `server error ${error}`
        })
    }
}