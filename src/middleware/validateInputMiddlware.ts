import { NextFunction, Request, Response } from 'express'
import * as yup from 'yup'
import { middlewareLogger } from '../loggers'


export const validate = (schema: yup.ObjectSchema<any>) => async(req: Request, res: Response, next: NextFunction ) => {
    try {
   
        const res =await schema.validate(req.body, {abortEarly: false})
     
        next()
    } catch (error) {
        if(error instanceof yup.ValidationError) {
            middlewareLogger(error)
            return res.status(200).json({
                status: 400,
                message: 'invalid input',
                data: {},
                success: false
            })
        }
        return res.status(200).json({
                status: 500,
                message: `server error ${error}`,
                data: {},
                success: false
            })
    }
}   