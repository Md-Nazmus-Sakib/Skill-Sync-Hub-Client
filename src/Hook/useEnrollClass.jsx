import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecret from './useAxiosSecret';
import useAuth from './useAuth';

const useEnrollClass = () => {
    const axiosSecure = useAxiosSecret();
    const { user } = useAuth();
    const { data: enrollCourse = [] } = useQuery({
        queryKey: ['enrollCourse'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrollClass/${user?.email}`);
            return res.data;
        }
    })

    return [enrollCourse]
};

export default useEnrollClass;