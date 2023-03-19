import { Amplify } from 'aws-amplify';
import cognito from '../cognito.json';

Amplify.configure({
    Auth: {
        userPoolId: cognito.userPool,
        userPoolWebClientId: cognito.clientId,
        region: cognito.region,
        oauth: {
            domain: cognito.userPoolUri,
            scope: cognito.tokenScopes,
            redirectSignIn: cognito.callbackUri,
            redirectSignOut: cognito.signoutUri,
            responseType: 'code',
        },
    },
});
