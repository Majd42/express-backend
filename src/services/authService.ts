import bcrypt from'bcryptjs'
import jwt from 'jsonwebtoken'

import { SignInParams, SignupParams } from "../types"
import UserModel from "../models/userModel"


export const signupService = async({username, email, password}: SignupParams) => {
    const existingUser = await UserModel.findOne({email})
    if(existingUser) return null
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)
     
    const user = await UserModel.create({
        email,
        password: hashedPassword,
        username,
     
        
    })

    return user
}

export const signinService = async ({email, password}: SignInParams) => {
    const user = await UserModel.findOne({email})
    if(!user) return null
    const matched = await bcrypt.compare(password, user.password)
    if(!matched) return null
    const token = jwt.sign({email: user.email, id: user._id}, process.env.JWT_SECERT || "secret")
    return token
}

