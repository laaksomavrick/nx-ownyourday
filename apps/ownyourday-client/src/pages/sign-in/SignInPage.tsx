import { Box, Center, Flex, Spacer, Text } from '@chakra-ui/react';
import { GoogleSignInButton } from '../../components';
import React from 'react';
import { useGetCurrentUser } from '../../hooks';
import { Navigate } from 'react-router-dom';
import { TODAY } from '../../routes';

export const SignInPage: React.FC = () => {
    const { currentUser } = useGetCurrentUser();

    if (currentUser) {
        return <Navigate to={TODAY} data-testid="NavigateToToday" />;
    }

    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            height="100%"
            data-testid="SignInPage"
        >
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
