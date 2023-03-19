import { Box, ChakraProvider } from '@chakra-ui/react';
import '../../setupAmplify';
import { UserContextProvider } from '../../providers';
import { AppRoutes } from '../../components/app-routes';

export function AppPage() {
    return (
        <ChakraProvider>
            <UserContextProvider>
                <Box h="100vh">
                    <AppRoutes />
                </Box>
            </UserContextProvider>
        </ChakraProvider>
    );
}

export default AppPage;
