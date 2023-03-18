import { Box, Center, Flex, Spacer, Text } from '@chakra-ui/react';
import { GoogleSignInButton } from '../../components';

export const SignInPage: React.FC = () => {
    // TODO: return redirect to main page if user is already signed in
    return (
        <Flex alignItems="center" justifyContent="center" height="100vh">
            <Box
                maxW="512px"
                flex="1"
                p={[4]}
                border="1px solid"
                borderColor="gray.100"
                borderRadius="lg"
                boxShadow="sm"
            >
                <Text
                    textAlign="center"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize={['4xl']}
                >
                    ownyourday
                </Text>
                <Spacer h="2em" />
                <Center>
                    <GoogleSignInButton maxW="16em" />
                </Center>
                <Spacer h="1em" />
            </Box>
        </Flex>
    );
};
