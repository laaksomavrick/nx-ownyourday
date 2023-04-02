import { Box } from '@chakra-ui/react';
import { useGetHello, useGetPrivateHello } from '../../hooks';

export const TodayPage: React.FC = () => {
    const { data: helloData } = useGetHello();
    const { data: privateHelloData } = useGetPrivateHello();

    return (
        <Box>
            <p data-testid="TodayPage">today page</p>
            <p>
                {helloData?.message}
                {privateHelloData?.message}
            </p>
        </Box>
    );
};
