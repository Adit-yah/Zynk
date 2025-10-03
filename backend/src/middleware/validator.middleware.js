import { query, body, validationResult } from "express-validator";
import mongoose from "mongoose";

export const RegisterValidator = [
  body("username")
    .isLength({ min: 3, max: 20 })
    .withMessage("Username must be between 3 and 20 characters long")
    .notEmpty()
    .withMessage("Username is required"),

  body("email")
    .isEmail()
    .withMessage("Email must be a valid email address")
    .notEmpty()
    .withMessage("Email is required"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .notEmpty()
    .withMessage("Password is required"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "invalid input",
        errors: errors.array(),
      });
    }

    next();
  },
];

export const getPostsValidator = [
  query("limit")
    .isInt({ min: 1, max: 20 })
    .withMessage("limit must be an integer between 1 and 20"),
  // query('skip')
  // .isInt({min : 0})
  // .withMessage('skip must be a non-negative integer'),
  // .custom( value =>  value <= 20 && value >= 1 )
  // .withMessage('limit must be between 1 and 20'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Validation failed",
        errors: errors.array(),
      });
    }
    next();
  },
];

export const commentValidator = [
  body("post")
    .notEmpty()
    .withMessage("Post ID require")
    .custom((value) => {
      if (!mongoose.Types.ObjectId.isValid(value)) {
        throw new Error("Invalid Post ID");
      }
      return true;
    }),

  body("text")
    .notEmpty()
    .withMessage("comment text is require")
    .isLength({ min: 1, max: 500 })
    .withMessage("Comment text must be between 1 and 500 characters"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    next();
  },
];

export const likeValidator = [
  body('post')
  .notEmpty()
  .withMessage('Post ID is required')
  .custom( value => {
    if(!mongoose.Types.ObjectId.isValid(value)){
      throw new Error("Invalid Post ID");
    }
    return true;
  }),

  (req , res , next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({
        message: "Validation failed",
        errors: errors.array(),
      });
    }
    next();
  }
];

export const searchValidator = [
   query('username')
   .isLength({min : 1 })
   .withMessage('Search  query is empty')
   .isString()
   
]