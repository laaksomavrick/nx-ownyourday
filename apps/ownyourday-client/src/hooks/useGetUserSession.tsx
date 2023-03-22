import { useGetCognitoUser } from './useGetCognitoUser';
import { useEffect, useState } from 'react';

export const useGetUserSession = () => {
    const currentUser = useGetCognitoUser();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [currentUser]);

    const value = {
        currentUser,
        loading,
    };

    return value;
};
