import { Request, Response } from "express"
import { controllerLogger } from "../loggers"
import { signinService, signupService } from "../services/authService"


export const signup = async(req: Request, res: Response):Promise<Response>=>  {
    try {
        const {username, password, email } = req.body
        const user = await signupService({username, email, password})

    if(!user) {
        return res.status(200).json({
            status: 400,
            data:{},
            message: "failed to signup, invalid request",
            success: false
        })
    }

    return res.status(200).json({
        success: true,
        data: {user},
        message: "user created successfully",
        status: 200
    })

    } catch (error) {
        controllerLogger(error)
        return res.status(200).json({
            status: 500,
            success: false,
            message: `somthing went wrong: ${error}`,
            data: {}
        })
    }

}


export const signin = async(req: Request, res: Response):Promise<Response> => {
    try {

        const {email, password} = req.body

        const token = await signinService({email, password})
     
        if(!token) {
            return res.status(200).json({
                status: 400,
                success: false,
                data: {},
                message: "invalid credentials"
            })
        }
        return res.status(200).json({
            status: 200,
            success: true,
            data: token,
            message: 'signed in successfully '
        })


    } catch (error) {
        controllerLogger(error)
        return res.status(200).json({
            status: 500,
            success: false,
            message: `somthing went wrong: ${error}`,
            data: {}
        })
    }
}