import { Box, ChakraProvider } from '@chakra-ui/react';
import '../../setupAmplify';
import { SignInPage } from '../sign-in';

export function AppPage() {
    return (
        <ChakraProvider>
            <Box h="100vh">
                <SignInPage />
            </Box>
        </ChakraProvider>
    );
}

export default AppPage;
