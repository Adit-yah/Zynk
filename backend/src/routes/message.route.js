import express from 'express'
import { authMiddleware } from '../middleware/auth.middleware.js'
import { getMessageController } from '../controllers/message.controller.js'
const router = express.Router()

router.get(
    '/:chatId/message' ,
    authMiddleware ,
    getMessageController
)

export default router 