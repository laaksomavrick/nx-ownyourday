import { Box, ChakraProvider } from '@chakra-ui/react';
import '../../setupAmplify';
import { UserContextProvider } from '../../providers';
import { AppRoutes } from '../../components/app-routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function AppPage() {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <UserContextProvider>
                    <Box h="100vh">
                        <Router>
                            <AppRoutes />
                        </Router>
                    </Box>
                </UserContextProvider>
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default AppPage;
