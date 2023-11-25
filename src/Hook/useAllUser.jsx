
import useAxiosSecret from './useAxiosSecret';
import { useQuery } from '@tanstack/react-query';

const useAllUser = () => {
    const axiosSecure = useAxiosSecret();
    const { data: users = [], isPending: loading, refetch: userRefetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    return [users, loading, userRefetch]
};

export default useAllUser;