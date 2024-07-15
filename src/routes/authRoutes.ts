import { Router } from "express";
import { signin, signup } from "../controllers/authController";
import { authenticateToken } from "../middleware/authMiddleware";
import { validate } from "../middleware/validateInputMiddlware";

import signupSchema from "../schemas/signupSchema";
import signinSchema from "../schemas/signinSchema";


const router = Router()

router.post('/signup',validate(signupSchema), signup )
router.post('/signin',validate(signinSchema), signin)


export default router