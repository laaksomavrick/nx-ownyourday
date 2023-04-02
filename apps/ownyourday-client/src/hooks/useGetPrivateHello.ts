import { useQuery } from '@tanstack/react-query';
import { fetchPrivateHello } from '../data';
import useGetCurrentUser from './useGetCurrentUser';

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

export default useGetPrivateHello;
