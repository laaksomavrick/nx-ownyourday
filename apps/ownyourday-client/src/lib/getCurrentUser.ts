import { Auth } from 'aws-amplify';
import { CognitoUser } from '@ownyourday/common';
import { get } from 'lodash';

const getCurrentUser = async (): Promise<CognitoUser | null> => {
    try {
        const data = await Auth.currentSession();
        const accessToken = data.getAccessToken();
        const idToken = data.getIdToken();
        const user = idToken.payload;
        const jwt = accessToken.getJwtToken();
        return {
            user: {
                email: user.email,
            },
            jwt,
        };
    } catch (e) {
        return null;
    }
};

export default getCurrentUser;
