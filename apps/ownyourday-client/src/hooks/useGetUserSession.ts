import { useEffect, useState } from 'react';
import { useGetCognitoUser } from './index';

const useGetUserSession = () => {
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

export default useGetUserSession;
