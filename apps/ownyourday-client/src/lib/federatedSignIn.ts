import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/src/types/Auth';

export const federatedSignIn = (provider: CognitoHostedUIIdentityProvider) => {
    return Auth.federatedSignIn({ provider });
};
