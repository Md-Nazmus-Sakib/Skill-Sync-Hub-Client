
import useAxiosSecret from './useAxiosSecret';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useSingleUser = () => {
    const { user } = useAuth();

    const axiosSecure = useAxiosSecret();
    const { data: eachUser = [], isPending: loading, refetch: userRefetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`);
            return res.data;
        }
    })

    return [eachUser, loading, userRefetch]
};

export default useSingleUser;