import { Auth } from 'aws-amplify';
import { CognitoUser } from '@ownyourday/common';

const getCurrentUser = async (): Promise<CognitoUser | null> => {
    try {
        const data = await Auth.currentSession();
        const idToken = data.getIdToken();
        return idToken.payload as CognitoUser;
    } catch (e) {
        return null;
    }
};

export default getCurrentUser;
