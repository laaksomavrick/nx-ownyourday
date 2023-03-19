import { useEffect, useState } from 'react';
import { CognitoUser } from '@ownyourday/common';
import { Hub } from 'aws-amplify';
import getCurrentUser from '../lib/getCurrentUser';

export const useGetCognitoUser = () => {
    const [currentUser, setCurrentUser] = useState<CognitoUser | null>(null);

    useEffect(() => {
        (async () => {
            Hub.listen('auth', async ({ payload: { event, data } }) => {
                switch (event) {
                    case 'signUp':
                        break;
                    case 'cognitoHostedUI':
                    case 'signIn':
                        // eslint-disable-next-line no-case-declarations
                        const user = await getCurrentUser();
                        if (user == null) {
                            console.warn(
                                'No user found from cognito post log in'
                            );
                            return;
                        }
                        setCurrentUser(user);
                        break;
                    case 'signOut':
                        setCurrentUser(null);
                        break;
                    case 'signIn_failure':
                    case 'cognitoHostedUI_failure':
                        console.warn('Sign in failure', data);
                        break;
                    default:
                }
            });

            const user = await getCurrentUser();

            if (user == null) {
                console.log('No user session found, exiting.');
                return;
            }

            setCurrentUser(user);
        })();
    }, []);

    return currentUser;
};
