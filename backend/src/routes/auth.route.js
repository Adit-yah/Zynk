import express from "express" 
import { loginController, logoutController, registerController } from "../controllers/auth.controller.js"
import { RegisterValidator } from "../middleware/validator.middleware.js"

const router = express.Router()

router.route('/register').post( RegisterValidator , registerController)
router.route('/login').post( loginController)
router.route('/logout').post( logoutController)

export default router