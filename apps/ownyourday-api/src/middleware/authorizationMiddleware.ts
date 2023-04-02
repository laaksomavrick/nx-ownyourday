import tokenVerifier from './tokenVerifier';
import { UnauthorizedError } from '../errors';

const authorizationMiddleware = async (req, res, next) => {
    try {
        const authHeader =
            req.headers['Authorization'] || req.headers['authorization'];
        const [_, token] = authHeader.split('Bearer ');

        if (token == null) {
            throw new Error('Malformed bearer token present');
        }

        await tokenVerifier.verify(token);

        next();
    } catch (e) {
        next(new UnauthorizedError());
    }
};

export default authorizationMiddleware;
