import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { createOrGetChatController, getChatController } from '../controllers/chat.controller.js';
const router = express.Router()

router.get(
    '/',
    authMiddleware,
    getChatController
)

router.post(
    '/:userId',
    authMiddleware,
    createOrGetChatController
)

export default router