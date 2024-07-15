import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

import { AuthenticatedRequest, JWT_PAYLOAD } from "../types";
import UserModel from "../models/userModel";
import { middlewareLogger } from "../loggers";

export const authenticateToken = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
   
        const token = req.headers['authorization']?.replace('Bearer', '').trim()
        // middlewareLogger(token)
        if(!token) {
            return res.status(200).json({
                status: 400,
                data:{},
                message: "invalid request",
                success: false
            })
        }
        const decodedUser = jwt.verify(token, process.env.JWT_SECRET || "secret" ) as JWT_PAYLOAD
        // middlewareLogger(verified, 'verified')

        const user = await UserModel.findById(decodedUser.id)
          if (!user) {
        return res.status(400).send({
            status: 400, 
            success: false,
            data: {},
            message: "user not found"
        })
    }
        req.user= user
        next()
        // next()
    } catch (error) {
        middlewareLogger('server error',error)
        return res.status(200).json({
            status: 500,
            data:{},
            success: false, 
            message: `server error :${error}`
        })
    }
}   