import React, { PropsWithChildren } from 'react';
import { useGetCurrentUser } from '../../hooks';
import { Navigate } from 'react-router-dom';

// TODO
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
    const { currentUser } = useGetCurrentUser();

    if (currentUser == null) {
        return <Navigate to="/sign-in" />;
    }

    return children;
};
