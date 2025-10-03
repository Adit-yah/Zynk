import express from 'express'
import { authMiddleware } from '../middleware/auth.middleware.js'
import { getLoginUserController, updateUserController , getSearchUserController } from '../controllers/user.controller.js'
import multer from 'multer'

const router = express.Router()


const storage = multer.memoryStorage()
const upload = multer({storage})

router.route('/').get(authMiddleware , getLoginUserController)
router.route('/update').post(authMiddleware , upload.single('image') , updateUserController )
router.route('/search').get(authMiddleware ,  getSearchUserController )

export default router