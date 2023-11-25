
import useAxiosSecret from './useAxiosSecret';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useUserRole = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecret();
    const { data: userRole, isPending: isLoading } = useQuery({
        queryKey: [user?.email, 'role'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/role/${user?.email}`);
            // console.log(res.data)
            return res.data;
        }
    })
    return [userRole, isLoading]
};

export default useUserRole;