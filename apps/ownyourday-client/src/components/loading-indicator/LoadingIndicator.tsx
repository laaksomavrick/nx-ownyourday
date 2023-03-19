import { Flex, Spinner } from '@chakra-ui/react';
import React from 'react';

export const LoadingIndicator: React.FC = () => (
    <Flex
        justifyContent="center"
        alignItems="center"
        h="100%"
        w="100%"
        data-testid="loadingIndicator"
    >
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="teal.400"
            size="xl"
        />
    </Flex>
);
