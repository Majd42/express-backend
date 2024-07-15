import { Request, Response } from "express"
import mongoose from "mongoose"
import UserModel from "../models/userModel"
import { controllerLogger } from "../loggers"

export const getUsers = async (req: Request, res: Response) => {

    const users = await UserModel.find()
    return res.status(200).json({
        success: true,
        status: 200,
        data: users, 
        message: 'get users success'
    })
}


export const deleteUsers = async (req:Request, res:Response) => {
    await UserModel.deleteMany()
  
    const users = await UserModel.find()
    return res.status(200).json({
        success: true,
        status: 200,
        data: users, 
        message: 'get users success'
    })
}