"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/');
    },
    filename: (req, file, cb) => {
        req.body.image = `${Date.now()}-${file.originalname.trim().toLowerCase()}`;
        cb(null, `${Date.now()}-${file.originalname.trim().toLowerCase()}`);
    }
});
const fileFilter = (req, file, cb) => {
    const allowdtypes = /jpeg|jpg|png/;
    const extname = allowdtypes.test(path_1.default.extname(file.originalname).toLocaleLowerCase());
    const mimetype = allowdtypes.test(file.mimetype);
    if (extname && mimetype) {
        return cb(null, true);
    }
    else {
        cb(new Error('Only .jpeg .jpg and .png files are allowed'));
    }
};
const upload = (0, multer_1.default)({
    storage,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter
});
exports.default = upload;
