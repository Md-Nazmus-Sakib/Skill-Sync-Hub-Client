
import useAxiosSecret from './useAxiosSecret';
import { useQuery } from '@tanstack/react-query';

const useAllUser = () => {
    const axiosSecure = useAxiosSecret();
    const { data: users = [], isPending: loading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    return [users, loading, refetch]
};

export default useAllUser;