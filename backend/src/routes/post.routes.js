import express from "express";
import multer from "multer";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createPostController, getPostsController, createCommentController, createLikeController, getCommentController} from "../controllers/post.controller.js";
import { commentValidator, getPostsValidator, likeValidator } from '../middleware/validator.middleware.js'


const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });


router.post(
  "/post",
  authMiddleware,
  upload.single("image"),
  createPostController
);

router.get(
  "/",
  authMiddleware,
  getPostsValidator, 
  getPostsController
);

router.post(
  '/comment',
  authMiddleware,
  commentValidator ,
  createCommentController
);

router.get(
  '/getComments',
  authMiddleware,
   getCommentController,
)

router.post(
  '/like',
  authMiddleware,
  likeValidator,
  createLikeController
);



export default router;
  