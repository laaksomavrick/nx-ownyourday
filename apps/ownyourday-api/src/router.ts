import express from "express";

const router = express.Router()

// Public routes

router.get('/hello', (req, res) => {
    res.send({message: 'hello, world'})
})
router.use((req, res, next) => {
    // TODO: validate jwt
    // https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html
   next();
})

// Private routes
router.get('/hello', (req, res) => {
    res.send({message: 'hello, world'})
})

export default router;
