import dotenv from 'dotenv'

dotenv.config()

export default {
    MONGODB_URL : process.env.MONGODB_URL,
    JWT_SECRET : process.env.JWT_SECRET,
    IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY,
    IMAGEKIT_PUBLIC_KEY: process.env.IMAGEKIT_PUBLIC_KEY,
    IMAGEKIT_URL_ENDPOINT: process.env.IMAGEKIT_URL_ENDPOINT,
    GEMINI_API_KEY : process.env.GEMINI_API_KEY
}