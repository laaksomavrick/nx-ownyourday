import React, { useEffect } from 'react';
import { useGetCurrentUser } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { SIGN_IN } from '../../routes';

export interface AuthGuardProps {
    children: JSX.Element;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
    const { currentUser } = useGetCurrentUser();
    const navigate = useNavigate();

    // TODO: if is loading, return loading mask

    useEffect(() => {
        if (currentUser == null) {
            navigate(SIGN_IN);
        }
    }, [currentUser]);

    return children;
};
