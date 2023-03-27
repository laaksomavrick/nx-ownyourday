import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Box } from '@chakra-ui/react';

export const getBase = () => 'http://localhost:3000/api';
export const getHeaders = (token: string | undefined) => ({
    Authorization: `Bearer ${token}`,
});

const fetchHello = async () => {
    const base = getBase();
    const result = await fetch(`${base}/hello`);
    return result.json();
};

const fetchPrivateHello = async () => {
    const token = 'todo';
    const base = getBase();
    const result = await fetch(`${base}/privatehello`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return result.json();
};

export const TodayPage: React.FC = () => {
    const { data: helloData } = useQuery({
        queryKey: ['hello'],
        queryFn: fetchHello,
    });

    const { data: privateHelloData } = useQuery({
        queryKey: ['privatehello'],
        queryFn: fetchPrivateHello,
    });

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
