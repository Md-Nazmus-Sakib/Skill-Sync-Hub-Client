
import useAxiosSecret from './useAxiosSecret';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useTeacherClass = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecret();
    const { data: teacherClasses = [], isPending: classLoading, refetch: classRefetch } = useQuery({
        queryKey: [user?.email, 'classes'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/class/add/${user?.email}`);
            return res.data;
        }
    })

    return [teacherClasses, classLoading, classRefetch]

};

export default useTeacherClass;