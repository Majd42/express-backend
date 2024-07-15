import { Request } from "express"
import mongoose from "mongoose"

export type SignInParams= { 
    email: string, 
    password: string
}

export type SignupParams = {
    username: string, 
    password: string,
    email: string
}

export type JWT_PAYLOAD = {
    id: string,
    email: string
}

export interface IUser extends Document {
    _id: mongoose.Schema.Types.ObjectId
    username: string,
    email: string,
    password: string,
    profileImage?: string
    createdAt: Date, 
    updatedAt: Date 
}

export interface IImage {
    url: string,
    alt: string,
}

export interface IProduct extends Document {
    _id: mongoose.Schema.Types.ObjectId,
    title: string,
    description: string,
    gallery : IImage[], 
    categoryId: string,
    createdAt: Date,
    updatedAt: Date,
    price: number
}

export interface AuthenticatedRequest extends Request{
    user?: IUser
}

export interface ICategory extends Document {
    _id: mongoose.Schema.Types.ObjectId
    title: string, 
    description: string,
    image: string,
    parentCategoy?: string,
    createdAt: Date,
    updatedAt: Date

}

export type CreateCategoryParams = {
    title: string, 
    description: string,
    image: string, 
    parentCategory? : string,
    
}

export type UpdateCategoryParams = { 
    id: string, 
    title : string,
    description: string,
    parentCategory?: string,
    image?: string
}

export type getCategoryParams = { 
    id: string
}

export type deleteCategoryParams = {
    id: string
}


export type addProductParams = {
    title: string,
    description: string,
    price: number,
    discount?: number,
    gallery: string[],
    categoryId: string
}


export type updateProductParams = {
    id: string
}