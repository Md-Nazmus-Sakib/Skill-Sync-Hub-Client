import React from 'react';
import useAxiosSecret from './useAxiosSecret';
import { useQuery } from '@tanstack/react-query';

const useAllTeacher = () => {
    const axiosSecure = useAxiosSecret();
    const { data: teachers = [], isPending: loading, refetch } = useQuery({
        queryKey: ['teachers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/teacher');
            return res.data;
        }
    })

    return [teachers, loading, refetch]
};


export default useAllTeacher;