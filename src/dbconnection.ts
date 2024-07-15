import mongoose from "mongoose"
import debug from "debug"
import { dbLogger } from "./loggers"



export default async function connectToDatabase (): Promise<void>{
    try {
            const dbURI = process.env.DATABASE_URL || ""
             await mongoose.connect(dbURI)
            dbLogger('Connected to DataBase')
       
    } catch (error) {
        console.log(error)
    }

}