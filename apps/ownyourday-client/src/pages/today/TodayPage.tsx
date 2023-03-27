import {useQuery, useQueryClient} from "@tanstack/react-query";
import {Box} from "@chakra-ui/react";

export const getBase = () => process.env.REACT_APP_API_URL || 'http://localhost:3000/api';
export const getHeaders = (token: string | undefined) => ({ Authorization: `Bearer ${token}` });

const fetchHello = async () => {
    const base = getBase();
    const result = await fetch(`${base}/hello`)
    return result.json();
}

const fetchPrivateHello = async () => {
    const token = 'todo'
    const base = getBase();
    const result = await fetch(`${base}/privatehello`, {
        headers: { ...getHeaders(token) }
    });
    return result.json();
}

export const TodayPage: React.FC = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['hello'],
        queryFn: fetchHello
    })

    if (error) return 'An error has occurred: '

    return (
        <Box>
            <p data-testid="TodayPage">today page</p>
            <p>
                {isLoading ? "Loading..." : data.message}
            </p>
        </Box>
        )
        ;
};
