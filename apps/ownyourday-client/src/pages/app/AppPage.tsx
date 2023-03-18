import { Box, ChakraProvider } from '@chakra-ui/react';
import useGetCurrentUser from '../../hooks/useGetCurrentUser';
import { GoogleSignIn } from '../../components';
import '../../setupAmplify';

export function AppPage() {
    const currentUser = useGetCurrentUser();
    return (
        <ChakraProvider>
            <Box h="100vh">
                <GoogleSignIn />
                <p>current user: {JSON.stringify(currentUser)}</p>
            </Box>
        </ChakraProvider>
    );
}

export default AppPage;
