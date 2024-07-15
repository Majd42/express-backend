import { Request } from "express";
import multer from "multer";
import path from "path";



const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'public/')
    },
    filename: (req, file, cb) => {

         if (!req.body.images) {
            req.body.images = [];
        }

        req.body.images.push(`${Date.now()}-${file.originalname.trim().toLowerCase()}`);
        cb(null, `${Date.now()}-${file.originalname.trim().toLowerCase()}`)
    }
})


const fileFilter = (req: Request,file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const allowdtypes = /jpeg|jpg|png/;
    const extname = allowdtypes.test(path.extname(file.originalname).toLocaleLowerCase())
    const mimetype = allowdtypes.test(file.mimetype)
    if(extname && mimetype) {
        return cb(null, true)
    }
    else {
        cb(new Error ('Only .jpeg .jpg and .png files are allowed'))
    }
}



const uploadMulti = multer({
    storage,
    limits: {fileSize: 1024* 1024* 5},
    fileFilter
})

export default uploadMulti