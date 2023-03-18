import { federatedSignIn } from '../../lib';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/src/types/Auth';
import { FcGoogle } from 'react-icons/fc';
import { Button, ButtonProps, Center, Text } from '@chakra-ui/react';

export const GoogleSignInButton: React.FC<ButtonProps> = ({ ...rest }) => {
    return (
        <Button
            onClick={() =>
                federatedSignIn(CognitoHostedUIIdentityProvider.Google)
            }
            w={'full'}
            maxW={'md'}
            variant={'outline'}
            leftIcon={<FcGoogle />}
            {...rest}
        >
            <Center>
                <Text>Sign in with Google</Text>
            </Center>
        </Button>
    );
};
