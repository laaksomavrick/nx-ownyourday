import { Box, ChakraProvider } from '@chakra-ui/react';
import '../../setupAmplify';
import { SignInPage } from '../sign-in';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from 'react-router-dom';
import { TodayPage } from '../today';
import { UserContextProvider } from '../../providers';
import { AuthGuard, LoadingIndicator } from '../../components';
import { useGetCurrentUser } from '../../hooks';

const router = createBrowserRouter([
    {
        path: '/sign-in',
        element: <SignInPage />,
    },
    {
        path: '/today',
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

export function AppPage() {
    return (
        <ChakraProvider>
            <UserContextProvider>
                <Box h="100vh">
                    <AppSkeleton />
                </Box>
            </UserContextProvider>
        </ChakraProvider>
    );
}

// TODO: rename routes
const AppSkeleton = () => {
    const { loading } = useGetCurrentUser();

    if (loading) {
        return <LoadingIndicator />;
    }

    return <RouterProvider router={router} />;
};

export default AppPage;
