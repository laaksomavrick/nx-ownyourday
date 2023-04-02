import express from 'express';
import { authorizationMiddleware } from './middleware';

const router = express.Router();

// Public routes

router.get('/hello', (req, res) => {
    res.send({ message: 'hello, world' });
});

router.use(authorizationMiddleware);

// Private routes
router.get('/privatehello', (req, res) => {
    res.send({ message: 'hello, world from private' });
});

export default router;
