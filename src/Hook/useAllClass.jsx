
import useAxiosSecret from './useAxiosSecret';
import { useQuery } from '@tanstack/react-query';

const useAllClass = () => {
    const axiosSecure = useAxiosSecret();
    const { data: courses = [], isPending: loading, refetch: coursesRefetch } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const res = await axiosSecure.get('/class');
            return res.data;
        }
    })

    return [courses, loading, coursesRefetch]
};

export default useAllClass;