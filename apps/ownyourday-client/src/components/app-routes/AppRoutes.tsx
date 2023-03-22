import { useGetCurrentUser } from '../../hooks';
import { LoadingMask } from '../loading-mask';
import { Navigate, Routes, Route } from 'react-router-dom';
import { SIGN_IN, TODAY } from '../../routes';
import { SignInPage } from '../../pages/sign-in';
import { AuthGuard } from '../auth-guard';
import { TodayPage } from '../../pages/today';

export const AppRoutes = () => {
    const { loading } = useGetCurrentUser();

    if (loading) {
        return <LoadingMask />;
    }

    return (
        <Routes>
            <Route path={SIGN_IN} element={<SignInPage />}></Route>
            <Route
                path={TODAY}
                element={
                    <AuthGuard>
                        <TodayPage />
                    </AuthGuard>
                }
            ></Route>
            <Route path="*" element={<Navigate to={TODAY} />}></Route>
        </Routes>
    );
};
