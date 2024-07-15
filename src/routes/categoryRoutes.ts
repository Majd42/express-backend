import { Router } from "express";

import { createCategory, deleteAllCategories, deleteCategory, getAllCategories, getCategoryById, updateCategory } from "../controllers/categoryController";
import { validate } from "../middleware/validateInputMiddlware";
import createCategorySchema from "../schemas/createCategorySchema";
import updateCategorySchema from "../schemas/updateCategorySchema";
import upload from "../middleware/imageUploadMiddleware";
import uploadMulti from "../middleware/multiImageUploadMiddleware";
import testSchema from "../schemas/testSchema";




const router = Router()

router.get('/' ,getAllCategories)
router.delete('/', deleteAllCategories)
router.delete('/:id', deleteCategory)

router.post('/addCategory', upload.single('image'),validate(createCategorySchema) ,createCategory )
router.patch('/updateCategory', upload.single('image'), validate(updateCategorySchema), updateCategory)
router.get('/:id', getCategoryById)


export default router