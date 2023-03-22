import { useGetCurrentUser } from '../../hooks';
import { LoadingMask } from '../loading-mask';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from 'react-router-dom';
import { SIGN_IN, TODAY } from '../../routes';
import { SignInPage } from '../../pages/sign-in';
import { AuthGuard } from '../auth-guard';
import { TodayPage } from '../../pages/today';

const router = createBrowserRouter([
    {
        path: SIGN_IN,
        element: <SignInPage />,
    },
    {
        path: TODAY,
        element: (
            <AuthGuard>
                <TodayPage />
            </AuthGuard>
        ),
    },
    {
        path: '*',
        element: <Navigate to="/today" />,
    },
]);

export const AppRoutes = () => {
    const { loading } = useGetCurrentUser();

    if (loading) {
        return <LoadingMask />;
    }

    return <RouterProvider router={router} />;
};
