import { useQuery } from '@tanstack/react-query';
import { fetchHello } from '../data';

const useGetHello = () => {
    return useQuery({
        queryKey: ['hello'],
        queryFn: fetchHello,
    });
};

export default useGetHello;
