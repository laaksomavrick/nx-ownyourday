import { Box, ChakraProvider } from '@chakra-ui/react';
import '../../setupAmplify';
import { UserContextProvider } from '../../providers';
import { AppRoutes } from '../../components/app-routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { useGetCurrentUser } from '../../hooks';
import { LoadingMask } from '../../components';

export function AppPage() {
    return (
        <ChakraProvider>
            <UserContextProvider>
                <Box h="100vh">
                    <Router>
                        <AppRoutes />
                    </Router>
                </Box>
            </UserContextProvider>
        </ChakraProvider>
    );
}

export default AppPage;
