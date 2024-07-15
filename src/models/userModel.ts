import mongoose from "mongoose";
import { IUser } from "../types";


const UserSchema = new mongoose.Schema({
    username : { 
        type: String,
        required: true, 
        minLength: 3, 
        maxLength: 20
    },
    email: {
        type: String, 
        required: true, 
        unique: true, 
    },
    password: {
        type: String, 
        required: true, 
        minLength: 8,
        maxLength: 255
    },
    profileImage: {
        type: String,
        maxLength: 255
    },
 
}, {timestamps: true})

const UserModel = mongoose.model<IUser>('User', UserSchema)
export default UserModel