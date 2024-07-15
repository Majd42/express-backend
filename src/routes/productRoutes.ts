import { Router } from "express";
import { addProduct, deleteAllProducts, getAllProducts, updateProduct } from "../controllers/productController";
import uploadMulti from "../middleware/multiImageUploadMiddleware";
import { validate } from "../middleware/validateInputMiddlware";
import addProductSchema from "../schemas/addProductSchema";



const router = Router()

router.get('/', getAllProducts)
router.post('/addProduct', uploadMulti.array('images'), validate(addProductSchema), addProduct)
router.delete('/', deleteAllProducts)
router.patch('/:id', updateProduct)

export default router