import { CognitoJwtVerifier } from 'aws-jwt-verify';
import config from '../config/config';

let cachedVerifier;

const verifierFactory = () => {
    if (cachedVerifier) {
        return cachedVerifier;
    }
    console.log('Generating AWS Cognito verifier');
    const userPoolId = config.get('aws.cognito.userPoolId');
    const clientId = config.get('aws.cognito.clientId');
    cachedVerifier = CognitoJwtVerifier.create({
        userPoolId,
        clientId,
        tokenUse: 'access',
    });

    return cachedVerifier;
};

const tokenVerifier = verifierFactory();

export default tokenVerifier;
