import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Box } from '@chakra-ui/react';
import { useGetCurrentUser } from '../../hooks';

export const getBase = () => 'http://localhost:3000/api';
export const getHeaders = (token: string | undefined) => ({
    Authorization: `Bearer ${token}`,
});

const fetchHello = async () => {
    const base = getBase();
    const result = await fetch(`${base}/hello`);
    return result.json();
};

const fetchPrivateHello = (token: string) => async () => {
    const base = getBase();
    const result = await fetch(`${base}/privatehello`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return result.json();
};

const useGetPrivateHello = () => {
    const { currentUser } = useGetCurrentUser();

    if (currentUser == null) {
        throw new Error('Current user cannot be null');
    }

    const token = currentUser?.jwt;

    return useQuery({
        queryKey: ['privatehello'],
        queryFn: fetchPrivateHello(token),
    });
};

export const TodayPage: React.FC = () => {
    const { data: helloData } = useQuery({
        queryKey: ['hello'],
        queryFn: fetchHello,
    });

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
