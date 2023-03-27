import { CognitoJwtVerifier } from 'aws-jwt-verify';
import config from './config';

const verifierFactory = () => {
    console.log('Generating AWS Cognito verifier');
    const userPoolId = config.get('aws.cognito.userPoolId');
    const clientId = config.get('aws.cognito.clientId');
    const verifier = CognitoJwtVerifier.create({
        userPoolId,
        clientId,
        tokenUse: 'access',
    });

    return verifier;
};

const verifier = verifierFactory();

const authorizationMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers['Authorization'];
        const [_, token] = authHeader.split('Bearer ');

        await verifier.verify(token);

        next();
    } catch (e) {
        e.statusCode = 401;
        e.message = 'Unauthorized';
        next(e);
    }
};

export { verifier, authorizationMiddleware };
