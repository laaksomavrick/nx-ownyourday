import { CognitoUser } from '@ownyourday/common';
import { createContext, PropsWithChildren } from 'react';
import { useGetUserSession } from '../../hooks';

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
    const value = useGetUserSession();

    return (
        <CurrentUserContext.Provider value={value}>
            {children}
        </CurrentUserContext.Provider>
    );
};
