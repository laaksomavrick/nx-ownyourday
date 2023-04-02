import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/src/types/Auth';

const federatedSignIn = (provider: CognitoHostedUIIdentityProvider) => {
    return Auth.federatedSignIn({ provider });
};

export default federatedSignIn;
