import { CognitoUser } from '@ownyourday/common';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { useGetCognitoUser } from '../../hooks';

// Need to handle loading state
export interface CurrentUserState {
    currentUser: CognitoUser | null;
    loading: boolean;
}
export const CurrentUserContext = createContext<CurrentUserState>({
    currentUser: null,
    loading: true,
});

export const UserContextProvider: React.FC<PropsWithChildren> = ({
    children,
}) => {
    const currentUser = useGetCognitoUser();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [currentUser]);

    const value = {
        currentUser,
        loading,
    };

    return (
        <CurrentUserContext.Provider value={value}>
            {children}
        </CurrentUserContext.Provider>
    );
};
